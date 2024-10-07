import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const formdata = await req.formData();


        console.log(formdata)


        const BearerToken = req.headers.get("Authorization"); // Retrieve Bearer Token from request headers

        console.log(BearerToken)
        if (!BearerToken) {
            return NextResponse.json({ message: "Authorization token is missing", status: 401 });
        }

        const myHeaders = new Headers({
            "Authorization": BearerToken,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
        };

        // Send the request to the external server
        const res = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/user/update`, requestOptions);

        if (!res.ok) {
            throw new Error(`Error: ${res.statusText}`);
        }

        const data = await res.json();
        return NextResponse.json({ data: data?.data, status: 200 });

    } catch (error) {
        console.error("Error updating user profile:", error);
        return NextResponse.json({ message: "Error updating user profile", status: 500, errors: error.message });
    }
}
