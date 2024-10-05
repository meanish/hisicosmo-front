"use server"

import { NextResponse } from "next/server";

export async function GET(req) {
    try {



        const myHeaders = new Headers();
        const BearerToken = req.headers.get("Authorization");
        const { searchParams } = new URL(req.url)
        const order_id = searchParams.get('id')

        myHeaders.append("Authorization", BearerToken)
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: 'follow',
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/order/single/${order_id}`, requestOptions, { cache: "no-store" })
        const allCart = await response.json();

        return NextResponse.json({ data: allCart?.data, status: 200 })

    }
    catch (error) {
        return NextResponse.json({ message: "Error in geting my cart data", status: 500, errors: error })

    }
}
