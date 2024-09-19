export async function getBrandBasedProducts() {


    const res = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/brand`, { cache: "no-store" })

    // if (!res.ok) {
    //     throw new Error('Failed to fetch brand produts', res.statusText)
    // }

    return res.json()

}