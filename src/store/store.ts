import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware'
interface TokenState {
  accessToken: string | null;
  
  setAccessToken: (accessToken: string) => void;
}

export const useAuth = create<TokenState>()(

    persist(
        (set) => ({
            accessToken: null,
            
            setAccessToken: (accessToken) => {
              set({ accessToken }); // Update the state with the new accessToken
            },
          
            
          }),
          {name:'access_token',
            storage:createJSONStorage(()=>sessionStorage)
          },
          
    ),
);
