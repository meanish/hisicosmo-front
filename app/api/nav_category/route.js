export async function getNavCategory() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HiSi_Server}/category`, { cache: "no-store" })

    // if (!res.ok) {
    //     throw new Error("Failed to fetch nav-catgory", res.statusText)
    // }
    return res.json()

}