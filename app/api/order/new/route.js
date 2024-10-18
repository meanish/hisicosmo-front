
"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json()
        const { totalAmount: total_amount, products, payment_type } = data



        const myHeaders = new Headers();
        // const BearerToken = `Bearer 742|OSEehTO548hr5FvHzEZi9onxn1FqVP87dCQmed391f4adf67`
        const BearerToken = req.headers.get("Authorization");

        myHeaders.append("Authorization", BearerToken)
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            body: JSON.stringify({ total_amount, products, payment_type }),
            headers: myHeaders,
        }





        const response = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/order/store`, requestOptions)
        const orderResponse = await response.json();


        console.log(orderResponse)

        if (orderResponse.success) {

            return NextResponse.json({ message: orderResponse?.message, status: 200, data: orderResponse?.data })
        }
        else {
            return NextResponse.json({ message: orderResponse?.message, status: 500 })

        }
    }
    catch (error) {
        return NextResponse.json({ message: "Error in Loggin in", status: 500, errors: error })

    }
}
