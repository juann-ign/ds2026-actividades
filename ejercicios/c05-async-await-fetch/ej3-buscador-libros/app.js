"use strict";
async function buscarLibros(query) {
    // Codifico el texto para que funcione en una URL (espacios, acentos, etc.)
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data.docs;
}
function renderizarLibros(libros) {
    const contenedor = document.getElementById("resultados");
    contenedor.innerHTML = "";
    const primerosDiez = libros.slice(0, 10);
    primerosDiez.forEach(({ title, author_name, first_publish_year }) => {
        const tarjeta = document.createElement("div");
        const autor = author_name ? author_name[0] : "Autor desconocido";
        const anio = first_publish_year ? String(first_publish_year) : "Año desconocido";
        tarjeta.innerHTML = `
        <strong>${title}</strong><br>
        ${autor} - ${anio}
        <hr>
        `;
        contenedor.appendChild(tarjeta);
    });
}
document.getElementById("btnBuscar").addEventListener("click", async () => {
    const input = document.getElementById("inputBusqueda");
    const cargando = document.getElementById("cargando");
    const error = document.getElementById("error");
    error.textContent = "";
    if (input.value.trim() === "") {
        error.textContent = "Escribí algo para buscar.";
        return;
    }
    cargando.style.display = "block";
    try {
        const libros = await buscarLibros(input.value.trim());
        if (libros.length === 0) {
            error.textContent = "No se encontraron resultados.";
        }
        else {
            renderizarLibros(libros);
        }
    }
    catch (e) {
        error.textContent = "Hubo un error al buscar. Intentá de nuevo.";
    }
    finally {
        cargando.style.display = "none";
    }
});
