/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { createJSONStorage, persist, PersistStorage } from "zustand/middleware";
import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY || "your-secret-key";

export class EncryptedStorage implements PersistStorage<any> {
  getItem(key: string): any | undefined {
    const value = sessionStorage.getItem(key);

    if (value) {
      const decryptedBytes = CryptoJS.AES.decrypt(value, SECRET_KEY);
      const decryptedValue = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return decryptedValue;
    }

    return value;
  }

  setItem(key: string, value: any): void {
    const encrypted = CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
    sessionStorage.setItem(key, encrypted);
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}

interface TokenState {
  accessToken: string | null;
  isAuth: boolean;
  userName: string;
  setAccessToken: (accessToken: string | null) => void;
  setIsAuth: (isAuth: boolean) => void;
  setUserName: (useName: string) => void;
}

export const useAuth = create<TokenState>()(
  persist(
    (set) => ({
      accessToken: null,
      isAuth: false,
      userName: "",
      setIsAuth: (isAuth) => {
        set({ isAuth });
      },
      setAccessToken: (accessToken) => {
        set({ accessToken });
      },
      setUserName: (userName) => {
        set({ userName });
      },
    }),
    { name: "access_token", storage: createJSONStorage(() => sessionStorage) }
  )
);

interface Dialog {
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
}
export const useDialog = create<Dialog>()(
  persist(
    (set) => ({
      isDialogOpen: false,
      setIsDialogOpen: (isDialogOpen: boolean) => {
        set({ isDialogOpen });
      },
    }),
    { name: "dialog", storage: createJSONStorage(() => sessionStorage) }
  )
);

interface SessionDetails {
  sessionDetails: string | null;
  setSessionDetails: (details: { username: string; password: string }) => void;
  getDecodedSessionDetails: () => { username: string; password: string } | null;
}

export const useSessionDetails = create<SessionDetails>()(
  persist(
    (set, get) => ({
      sessionDetails: null,
      setSessionDetails: (details: { username: string; password: string }) => {
        const encryptedValue: string = CryptoJS.AES.encrypt(
          JSON.stringify(details),
          SECRET_KEY
        ).toString();
        set({ sessionDetails: encryptedValue });
      },
      getDecodedSessionDetails: () => {
        const encryptedValue: string | null = get().sessionDetails;
        if (!encryptedValue) return null;

        try {
          const bytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
          const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
          return JSON.parse(decryptedValue);
        } catch (error) {
          console.error("Decryption failed:", error);
          return null;
        }
      },
    }),

    {
      name: "session_details",
      storage: createJSONStorage(() => new EncryptedStorage()),
    }
  )
);
