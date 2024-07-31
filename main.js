import './sass/main.scss'
import Handlebars from "handlebars";

const start = async () => {

    try {
        /* 1. Obtención de la plantilla */
        const respuesta = await fetch('templates/card.hbs')

        if( !respuesta.ok ) {
            throw new Error('No se pudo obtener la plantilla')
        }

        const plantilla = await respuesta.text() // No es un json. Es un archivo plano. Archivo de texto

        //console.log(plantilla) // string

        /* 1.1 Compillo la plantilla con HB */
        const template = Handlebars.compile(plantilla)
        // console.dir(template)
    
        /* 1.2 Esto me genera una plantilla que le voy a pasar la data. Me genera un string */

        const respuestaBack = await fetch('http://localhost:8080/productos/')
        // const respuestaBack = await fetch('https://615d8b5212571a00172076ba.mockapi.io/productos/')

        if ( !respuestaBack.ok ) {
            throw new Error('Algo paso con los productos', respuestaBack.status)
        }

        const dataProductos = await respuestaBack.json()
        //console.log(dataProductos) // <---- array de productos

        const data = { productos: dataProductos }
        //console.log(data)
        const html = template(data)

        console.log(html)

        const contenedorCards = document.querySelector('#contenedor-cards')

        contenedorCards.innerHTML = html

    } catch (error) {
        console.log('[start]:', error)
    }

}

window.addEventListener('DOMContentLoaded',  start)
