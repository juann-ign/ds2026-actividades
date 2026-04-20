const btnAgregar = document.getElementById("btnAgregar");
const inputProducto = document.getElementById("inputProducto");
const lista = document.getElementById("listaProductos");
const contador = document.getElementById("contador");
const errorProducto = document.getElementById("errorProducto");

// Actualiza el texto del contador según cuántos li hay
function actualizarContador() {
    const cantidad = lista.querySelectorAll("li").length;
    contador.textContent = `${cantidad} productos en la lista`;
}

btnAgregar.addEventListener("click", function() {
    const nombre = inputProducto.value.trim(); 

    errorProducto.textContent = "";

    if (nombre === "") {
        errorProducto.textContent = "Escribí el nombre del producto.";
    return;
    }

    const li = document.createElement("li");
    li.textContent = nombre;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", function() {
        li.remove(); // borra el li del DOM
        actualizarContador();
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);

    inputProducto.value = ""; // limpia el input
    actualizarContador();
});