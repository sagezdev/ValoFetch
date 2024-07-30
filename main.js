import { fetchApi } from "./modules/fetchApi.js";
import { fetchName } from "./modules/fetchName.js";

//7f94d92c-4234-0a36-9646-3a87eb8b5c89
$(document).ready(async function () {
    const data = await fetchApi()

    /*
    $('#search').on("click", async () => {
        let searchInput = $('#area').val()
        const busqueda = await fetchName(searchInput)
    });
    */

    const divHtml = document.getElementById('divMain')
    data.forEach(element => {
        const pNombre = document.createElement('p')
        divHtml.appendChild(pNombre)
        pNombre.textContent = element.displayName
        pNombre.className = 'personaje'
    });
})

