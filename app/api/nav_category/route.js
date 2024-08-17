export async function getNavCategory() {

    const res = await fetch('http://tranquilbytes.com/hisicosmetics/category', { cache: "no-store" })

    if (!res.ok) {
        throw new Error("Failed to fetch nav-catgory", res.statusText)
    }
    return res.json()

}