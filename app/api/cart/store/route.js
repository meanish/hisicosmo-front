"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json()
        const { id, quantity } = data

        console.log("Data in api ", data)


        const myHeaders = new Headers();
        // const BearerToken = `Bearer 742|OSEehTO548hr5FvHzEZi9onxn1FqVP87dCQmed391f4adf67`
        const BearerToken = req.headers.get("Authorization");
        console.log("Token ", BearerToken)

        myHeaders.append("Authorization", BearerToken)
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            body: JSON.stringify({ product_id: id, quantity }),
            headers: myHeaders,
            redirect: 'follow',
        }



        console.log("Request options", requestOptions)


        const response = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/cart/store`, requestOptions)
        const cartResponse = await response.json();


        console.log("cart Respisebn", cartResponse)

        if (cartResponse.success) {

            return NextResponse.json({ message: cartResponse?.message, status: 200 })
        }
        else {
            return NextResponse.json({ message: cartResponse?.message, status: 500 })

        }
    }
    catch {
        return NextResponse.json({ message: "Error in Loggin in", status: 500, errors: error })

    }
}
