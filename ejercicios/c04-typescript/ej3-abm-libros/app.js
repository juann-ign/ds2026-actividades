"use strict";
// Array con libros de ejemplo
let catalogo = [
    { isbn: "001", titulo: "El nombre del viento", autor: "Patrick Rothfuss", precio: 2500, disponible: true, genero: "Fantasía" },
    { isbn: "002", titulo: "Sapiens", autor: "Yuval Noah Harari", precio: 3200, disponible: false, genero: "Historia" },
    { isbn: "003", titulo: "Dune", autor: "Frank Herbert", precio: 2800, disponible: true, genero: "Ciencia ficción" },
    { isbn: "004", titulo: "El fin de la eternidad", autor: "Isaac Asimov", precio: 1900, disponible: true, genero: "Ciencia ficción" },
];
function buscarPorAutor(autor) {
    return catalogo.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}
function librosDisponibles() {
    return catalogo.filter(libro => libro.disponible);
}
function precioPromedio(libros) {
    if (libros.length === 0)
        return 0;
    const total = libros.reduce((suma, libro) => suma + libro.precio, 0);
    return total / libros.length;
}
function renderizar(libros) {
    const lista = document.getElementById("listado");
    const stats = document.getElementById("stats");
    lista.innerHTML = "";
    libros.forEach(libro => {
        const li = document.createElement("li");
        const estado = libro.disponible ? "Disponible" : "No disponible";
        li.textContent = `${libro.titulo} - ${libro.autor} - ${libro.precio} - ${estado}`;
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", function () {
            eliminarLibro(libro.isbn);
        });
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
    const promedio = precioPromedio(libros).toFixed(2);
    stats.textContent = `Mostrando ${libros.length} libro(s). Precio promedio: ${promedio}`;
}
document.getElementById("filtrar").addEventListener("click", function () {
    const input = document.getElementById("filtroAutor");
    renderizar(buscarPorAutor(input.value));
});
document.getElementById("mostrarDisponibles").addEventListener("click", function () {
    renderizar(librosDisponibles());
});
document.getElementById("mostrarTodos").addEventListener("click", function () {
    renderizar(catalogo);
});
function agregarLibro(libro) {
    catalogo.push(libro);
    renderizar(catalogo);
}
function eliminarLibro(isbn) {
    catalogo = catalogo.filter(libro => libro.isbn !== isbn);
    renderizar(catalogo);
}
function validarFormulario() {
    const titulo = document.getElementById("fTitulo").value.trim();
    const autor = document.getElementById("fAutor").value.trim();
    const precioInput = document.getElementById("fPrecio").value;
    const genero = document.getElementById("fGenero").value.trim();
    const disponible = document.getElementById("fDisponible").checked;
    const precio = parseFloat(precioInput);
    if (titulo === "" || autor === "" || precioInput === "" || precio <= 0) {
        return null;
    }
    return {
        isbn: "AUTO-" + Date.now(),
        titulo,
        autor,
        precio,
        disponible,
        genero: genero !== "" ? genero : undefined,
    };
}
// Handler del botón Agregar
document.getElementById("btnAgregar").addEventListener("click", function () {
    const errorForm = document.getElementById("errorForm");
    errorForm.textContent = "";
    const libro = validarFormulario();
    if (libro === null) {
        errorForm.textContent = "Completá título, autor y un precio mayor a 0.";
        return;
    }
    // Limpiamos el formulario
    document.getElementById("fTitulo").value = "";
    document.getElementById("fAutor").value = "";
    document.getElementById("fPrecio").value = "";
    document.getElementById("fGenero").value = "";
    document.getElementById("fDisponible").checked = false;
    agregarLibro(libro);
});
document.getElementById("filtrar").addEventListener("click", function () {
    const input = document.getElementById("filtroAutor");
    renderizar(buscarPorAutor(input.value));
});
document.getElementById("mostrarDisponibles").addEventListener("click", function () {
    renderizar(librosDisponibles());
});
document.getElementById("mostrarTodos").addEventListener("click", function () {
    renderizar(catalogo);
});
renderizar(catalogo);
