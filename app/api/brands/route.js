export async function getBrandBasedProducts() {


    const res = await fetch('https://tranquilbytes.com/hisicosmetics/brand', { cache: "no-store" })

    if (!res.ok) {
        throw new Error('Failed to fetch brand produts', res.statusText)
    }

    return res.json()

}