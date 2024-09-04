export async function getFilteredProduct(params) {


    const res = await fetch(`https://tranquilbytes.com/hisicosmetics/filters${params}`, { cache: "no-store" })

    if (!res.ok) {
        throw new Error('Failed to fetch brand produts', res.statusText)
    }

    return res.json()

}