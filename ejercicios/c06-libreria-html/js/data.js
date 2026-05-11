const libros = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", precio: 2800, imagen: "https://covers.openlibrary.org/b/id/8226196-L.jpg" },
    { id: 2, titulo: "El nombre del viento",  autor: "Patrick Rothfuss",        genero: "Fantasía épica",         precio: 3200, imagen: "https://covers.openlibrary.org/b/id/8370532-L.jpg" },
    { id: 3, titulo: "1984",                  autor: "George Orwell",           genero: "Distopía",               precio: 1900, imagen: "https://covers.openlibrary.org/b/id/8575708-L.jpg" },
    { id: 4, titulo: "El principito",         autor: "Antoine de Saint-Exupéry",genero: "Fábula",                 precio: 1400, imagen: "https://covers.openlibrary.org/b/id/8346726-L.jpg" },
    { id: 5, titulo: "Rayuela",               autor: "Julio Cortázar",          genero: "Literatura experimental",precio: 2600, imagen: "https://covers.openlibrary.org/b/id/388931-L.jpg"  },
    { id: 6, titulo: "El alquimista",         autor: "Paulo Coelho",            genero: "Novela filosófica",      precio: 1750, imagen: "https://covers.openlibrary.org/b/id/12006548-L.jpg"}
];

function renderizarCards(lista, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (lista.length === 0) {
        contenedor.innerHTML = '<div class="col-12 text-center py-5"><p>No se encontraron resultados.</p></div>';
        return;
    }
    contenedor.innerHTML = lista.map(libro => `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="card card-libro h-100">
                <img src="${libro.imagen}" class="card-img-top" alt="${libro.titulo}">
                <div class="card-body d-flex flex-column">
                    <span class="badge-genero mb-2">${libro.genero}</span>
                    <h5 class="card-title">${libro.titulo}</h5>
                    <p class="card-subtitle mb-2">${libro.autor}</p>
                    <div class="d-flex justify-content-between align-items-center   mt-auto pt-3" style="border-top:1px solid #eee;">
                        <span style="font-family:var(--fuente-titulo); font-size:1.1rem; color:var(--color-acento);">
                        $${libro.precio.toLocaleString('es-AR')}
                        </span>
                        <a href="libro.html" class="btn btn-libreria btn-sm">Ver más</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function iniciarBuscador(inputId, contenedorId) {
    renderizarCards(libros, contenedorId);
    document.getElementById(inputId).addEventListener('input', function () {
        const termino = this.value.toLowerCase();
        const resultado = libros.filter(l =>
        l.titulo.toLowerCase().includes(termino) ||
        l.autor.toLowerCase().includes(termino) ||
        l.genero.toLowerCase().includes(termino)
        );
        renderizarCards(resultado, contenedorId);
    });
}s