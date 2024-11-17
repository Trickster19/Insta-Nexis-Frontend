import useAuth from "@/store"
import React, { useEffect } from "react"
import { Navigate } from "react-router-dom";

interface Props{
    children:React.Component
}
export const ProtectedRoute=({children}:Props)=>{

     const accesstoken=useAuth(state=>state.accessToken)


    if(accesstoken) return children;

    return <Navigate to="/" />

}