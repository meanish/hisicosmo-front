export async function getAllProducts() {


    const res = await fetch('http://tranquilbytes.com/hisicosmetics/product', { cache: "no-store" })

    if (!res.ok) {
        throw new Error('Failed to fetch brand produts', res.statusText)
    }

    return res.json()

}