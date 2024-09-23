import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const brand = searchParams.get('brand');
    const category = searchParams.get('category');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    // Only include non-empty parameters in the query string
    const params = new URLSearchParams();

    if (brand) {
        params.append('brand', brand);
    }
    if (category) {
        params.append('category', category);
    }
    if (minPrice) {
        params.append('minPrice', minPrice);
    }
    if (maxPrice) {
        params.append('maxPrice', maxPrice);
    }

    try {
        // Fetch data from an external API using only valid params
        const res = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/filters?${params.toString()}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }

        const filteredData = await res.json();
        return NextResponse.json(filteredData);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
