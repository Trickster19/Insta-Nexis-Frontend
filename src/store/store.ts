import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
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
