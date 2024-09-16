"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import { NextResponse } from "next/server";

export async function GET(req) {
    try {



        const myHeaders = new Headers();
        const BearerToken = req.headers.get("Authorization");
        console.log("Token ", BearerToken)

        myHeaders.append("Authorization", BearerToken)


        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: 'follow',
        }

        console.log("Request options", requestOptions)
        const response = await fetch(`${process.env.HiSi_Server}/cart`, requestOptions, { cache: "no-store" })
        const allCart = await response.json();


        // console.log("participate respojse data", cartResponse)


        return NextResponse.json({ data: allCart.data, status: 200 })

    }
    catch {
        return NextResponse.json({ message: "Error in Loggin in", status: 500, errors: error })

    }
}
