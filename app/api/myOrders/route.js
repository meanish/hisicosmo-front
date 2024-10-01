import { NextResponse } from "next/server"

export async function GET(req) {


    try {
        const myHeaders = new Headers()
        const BearerToken = req.headers.get("Authorization")

        myHeaders.append("Authorization", BearerToken)

        const requestOptions = {
            method: "GET",
            headers: myHeaders
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/order/myorder`, requestOptions)
        const data = await res.json()
        console.log(data, "order data in route")
        return NextResponse.json({ data: data?.data, status: 200 })

    } catch (error) {
        return NextResponse.json({ message: "Error in geting user data", status: 500, errors: error })

    }
}  