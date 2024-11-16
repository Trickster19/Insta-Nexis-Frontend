import { create } from "zustand";

interface TokenState {
  accessToken: string | null;
  getAccessToken: () => string | null;
  setAccessToken: (accessToken: string) => void;
}

export const useStore = create<TokenState>((set, get) => ({
  accessToken: null,
  getAccessToken: () => {
    return get().accessToken; // Use the getter function to retrieve the current state
  },
  setAccessToken: (accessToken) => {
    set({ accessToken }); // Update the state with the new accessToken
  },
}));
