import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware'
interface TokenState {
  accessToken: string | null;
  isAuth:Boolean;
  setAccessToken: (accessToken: string) => void;
  setIsAuth : (isAuth:Boolean)=>void;

}

export const useAuth = create<TokenState>()(

    persist(
        (set) => ({
            accessToken: null,
            isAuth:false,
            setIsAuth:(isAuth)=>{
                   set({isAuth});
            },
            setAccessToken: (accessToken) => {
              set({ accessToken }); // Update the state with the new accessToken
            },
          
            
          }),
          {name:'access_token',
            storage:createJSONStorage(()=>sessionStorage)
          },
          
    ),
);
