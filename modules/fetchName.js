export async function fetchName(name){

    // UUID 7f94d92c-4234-0a36-9646-3a87eb8b5c89

    try {

        const NAME = `https://valorant-api.com/v1/agents/${name}`
        const response = await fetch(NAME)
        const json = await response.json()
        console.log(json.data)
        /*
        if (response.status !== 200) { throw new Error('Error') };
        const json = await response.json()
        const data = json.data
        return data
        */
    } catch (e) {
        console.log(e)
    }
}

fetchName('7f94d92c-4234-0a36-9646-3a87eb8b5c89')