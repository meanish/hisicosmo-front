"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();
        const response = await signIn('credentials', { ...data, redirect: false })

        return NextResponse.json({ message: "Success", status: 200 })


    }
    catch (error) {
        console.log("Error", error)

        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":

                    return NextResponse.json({ error: "Please check your email and password", status: 500, errors: error })
                default:
                    return NextResponse.json({ error: "Unknown Error Found", status: 500, errors: error })
            }
        }
        else {
            return NextResponse.json({ message: "Error in Loggin in", status: 500, errors: error })
        }
    }
}