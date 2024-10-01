import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        // Extract data from the request body
        const { username, phoneNumber, address, dob, featured_image } = await req.json();
        const BearerToken = req.headers.get("Authorization"); // Retrieve Bearer Token from request headers

        if (!BearerToken) {
            return NextResponse.json({ message: "Authorization token is missing", status: 401 });
        }

        // Define headers including Authorization token
        const myHeaders = new Headers({
            "Authorization": BearerToken,
            "Content-Type": "application/json",
        });

        // Define request options
        const requestOptions = {
            method: "POST", // Use POST method to update user data
            headers: myHeaders,
            body: JSON.stringify({
                username, dob, address, phoneNumber, featured_image
            }),
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
        return NextResponse.json({ message: "Error updating user profile", status: 500, errors: error });
    }
}
