"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json()
        const { id, count: quantity, method } = data



        const myHeaders = new Headers();
        // const BearerToken = `Bearer 742|OSEehTO548hr5FvHzEZi9onxn1FqVP87dCQmed391f4adf67`
        const BearerToken = req.headers.get("Authorization");

        myHeaders.append("Authorization", BearerToken)
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            body: JSON.stringify({ product_id: id, quantity }),
            headers: myHeaders,
            redirect: 'follow',
        }


        let response
        if (method === "update") {

            const res = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/cart/async/update`, requestOptions)
            response = await res.json();
        }
        else if (method === "remove") {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/cart/async/remove`, requestOptions)
            response = await res.json();

        }



        if (response.success) {
            return NextResponse.json({ message: response.message, status: 200 })
        }
        else {
            return NextResponse.json({ message: "failed to save on the cart", status: 500 })

        }
    }
    catch {
        return NextResponse.json({ message: "Error in Loggin in", status: 500, errors: error })

    }
}
