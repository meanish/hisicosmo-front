
"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json()
        console.log("Data", typeof data)

        console.log("Stringified Data:", JSON.stringify({ ...data }));

        const myHeaders = new Headers();
        // const BearerToken = `Bearer 742|OSEehTO548hr5FvHzEZi9onxn1FqVP87dCQmed391f4adf67`
        const BearerToken = req.headers.get("Authorization");

        myHeaders.append("Authorization", BearerToken)
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            body: JSON.stringify({ ...data }),
            headers: myHeaders,
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/shipping/store`, requestOptions)
        const shippingResponse = await response.json();

        console.log("Shipping DAta reponse", shippingResponse)


        if (shippingResponse.success) {

            return NextResponse.json({ message: shippingResponse?.message, status: 200 })
        }
        else {
            return NextResponse.json({ errors: shippingResponse?.errors, status: 400 })

        }
    }
    catch (error) {
        return NextResponse.json({ message: "Error in Loggin in", status: 500, errors: error.message })

    }
}
