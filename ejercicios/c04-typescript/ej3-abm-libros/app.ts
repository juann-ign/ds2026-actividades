interface Libro {
    isbn: string;
    titulo: string; 
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

// Array con libros de ejemplo
let catalogo: Libro[] = [
    { isbn: "001", titulo: "El nombre del viento", autor: "Patrick Rothfuss", precio: 2500, disponible: true, genero: "Fantasía" },
    { isbn: "002", titulo: "Sapiens", autor: "Yuval Noah Harari", precio: 3200, disponible: false, genero: "Historia" },
    { isbn: "003", titulo: "Dune", autor: "Frank Herbert", precio: 2800, disponible: true, genero: "Ciencia ficción" },
    { isbn: "004", titulo: "El fin de la eternidad", autor: "Isaac Asimov", precio: 1900, disponible: true, genero: "Ciencia ficción" },
];

function buscarPorAutor(autor: string): Libro[] {
    return catalogo.filter (libro =>
        libro.autor.toLowerCase().includes(autor.toLowerCase())
    )
}

function librosDisponibles(): Libro[] {
    return catalogo.filter(libro => libro.disponible);
}

function precioPromedio(libros: Libro[]): number {
    if (libros.length === 0) return 0;
    const total = libros.reduce((suma, libro) => suma + libro.precio, 0);
    return total / libros.length;
}

function renderizar(libros: Libro[]): void {
    const lista = document.getElementById("listado") as HTMLUListElement;
    const stats = document.getElementById("stats") as HTMLParagraphElement;

    lista.innerHTML = "";

    libros.forEach(libro => {
        const li = document.createElement("li");
        const estado = libro.disponible ? "Disponible" : "No disponible";
        li.textContent = `${libro.titulo} - ${libro.autor} - ${libro.precio} - ${estado}`

        const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.addEventListener("click", function () {
            eliminarLibro(libro.isbn);
        });

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    })

    const promedio = precioPromedio(libros).toFixed(2);
    stats.textContent = `Mostrando ${libros.length} libro(s). Precio promedio: ${promedio}`;
}

document.getElementById("filtrar")!.addEventListener("click", function() {
    const input = document.getElementById("filtroAutor")as HTMLInputElement;
    renderizar(buscarPorAutor(input.value));
})

document.getElementById("mostrarDisponibles")!.addEventListener("click", function(){
    renderizar(librosDisponibles());
})

document.getElementById("mostrarTodos")!.addEventListener("click", function() {
    renderizar(catalogo);
})

function agregarLibro(libro: Libro): void {
    catalogo.push(libro);
    renderizar(catalogo);
}

function eliminarLibro(isbn: string): void {
    catalogo = catalogo.filter(libro => libro.isbn !== isbn);
    renderizar(catalogo);
}

function validarFormulario(): Libro | null {
    const titulo = (document.getElementById("fTitulo") as HTMLInputElement).value.trim();
    const autor = (document.getElementById("fAutor") as HTMLInputElement).value.trim();
    const precioInput = (document.getElementById("fPrecio") as HTMLInputElement).value;
    const genero = (document.getElementById("fGenero") as HTMLInputElement).value.trim();
    const disponible = (document.getElementById("fDisponible") as HTMLInputElement).checked;

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
document.getElementById("btnAgregar")!.addEventListener("click", function () {
    const errorForm = document.getElementById("errorForm") as HTMLParagraphElement;
    errorForm.textContent = "";

    const libro = validarFormulario();

    if (libro === null) {
        errorForm.textContent = "Completá título, autor y un precio mayor a 0.";
        return;
    }

    // Limpiamos el formulario
    (document.getElementById("fTitulo") as HTMLInputElement).value = "";
    (document.getElementById("fAutor") as HTMLInputElement).value = "";
    (document.getElementById("fPrecio") as HTMLInputElement).value = "";
    (document.getElementById("fGenero") as HTMLInputElement).value = "";
    (document.getElementById("fDisponible") as HTMLInputElement).checked = false;

    agregarLibro(libro);
});

document.getElementById("filtrar")!.addEventListener("click", function () {
    const input = document.getElementById("filtroAutor") as HTMLInputElement;
    renderizar(buscarPorAutor(input.value));
});

document.getElementById("mostrarDisponibles")!.addEventListener("click", function () {
    renderizar(librosDisponibles());
});

document.getElementById("mostrarTodos")!.addEventListener("click", function () {
    renderizar(catalogo);
});

renderizar(catalogo);
