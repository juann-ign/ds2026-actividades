"use strict";
async function obtenerUsuarios() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const usuarios = await response.json();
        return usuarios;
    }
    catch (error) {
        console.error("Error al obtener los usuarios:", error);
        return [];
    }
}
function renderizarUsuarios(usuarios) {
    const lista = document.getElementById("user_list");
    usuarios.forEach(({ name, email }) => {
        const li = document.createElement("li");
        li.textContent = `Nombre: ${name}, Email: ${email}`;
        lista.appendChild(li);
    });
}
async function init() {
    const cargando = document.getElementById("loading");
    const error = document.getElementById("error");
    try {
        const usuarios = await obtenerUsuarios();
        renderizarUsuarios(usuarios);
    }
    catch (e) {
        error.textContent = ("Error al cargar los usuarios.");
    }
    finally {
        cargando.style.display = "none";
    }
}
init();
