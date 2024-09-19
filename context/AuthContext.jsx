"use client"


import { SessionProvider } from 'next-auth/react'
import React from 'react'



const AuthContextProvider = ({ children }) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default AuthContextProvider