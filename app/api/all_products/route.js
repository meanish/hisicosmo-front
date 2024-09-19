export async function getAllProducts() {


    const res = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/product`, { cache: "no-store" })

    // if (!res.ok) {
    //     throw new Error('Failed to fetch brand produts')
    // }

    return res.json()

}

export async function getSingleProduct(id) {


    const res = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/product/${id}`, { cache: "no-store" })

    // if (!res.ok) {
    //     throw new Error('Failed to fetch brand produts')
    // }

    return res.json()

}


