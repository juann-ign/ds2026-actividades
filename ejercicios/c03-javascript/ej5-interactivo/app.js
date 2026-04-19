const btn = document.getElementById("btnGenerar");
const input = document.getElementById("inputAltura");
const resultado = document.getElementById("resultado");
const error = document.getElementById("mensajeError");

btn.addEventListener("click", function() {
    const altura = parseInt(input.value);

  // Limpiamos lo anterior
    error.textContent = "";
    resultado.textContent = "";

    // Validación
    if (input.value === "" || altura < 1) {
        error.textContent = "Ingresá un número mayor a 0.";
        return; // frenamos la función acá
    }

    // Construimos el árbol fila por fila
    let arbol = "";
    for (let i = 1; i <= altura; i++) {
        // Cada fila tiene i asteriscos y un salto de línea
        for (let j = 0; j < i; j++) {
            arbol = arbol + "*";
        }
        arbol = arbol + "\n";
    }

    resultado.textContent = arbol;
});