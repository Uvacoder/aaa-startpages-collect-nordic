export async function fetchData(url) {
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(`error http status: ${res.status}`)
    }
    return res.json()
}