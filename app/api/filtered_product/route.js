export async function getFilteredProduct(params) {


    const res = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/filters${params}`, { cache: "no-store" })

    // if (!res.ok) {
    //     throw new Error('Failed to fetch brand produts', res.statusText)
    // }

    return res.json()

}