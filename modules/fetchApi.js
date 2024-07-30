export async function fetchApi() {
    const LINK = 'https://valorant-api.com/v1/agents'

    try {
        const response = await fetch(LINK)
        if (response.status !== 200) { throw new Error('Error') };
        const json = await response.json()
        const data = json.data
        return data
    } catch (e) {
        console.log(e)
    }
}

