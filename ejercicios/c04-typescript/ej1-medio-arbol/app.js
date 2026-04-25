"use strict";
const btn = document.getElementById("btnGenerar");
const input = document.getElementById("inputAltura");
const resultado = document.getElementById("resultado");
const error = document.getElementById("mensajeError");
function generarAsteriscos(altura) {
    let arbol = "";
    for (let i = 1; i <= altura; i++) {
        for (let j = 0; j < i; j++) {
            arbol = arbol + "*";
        }
        arbol = arbol + "\n";
    }
    return arbol;
}
btn.addEventListener("click", function () {
    const altura = parseInt(input.value);
    error.textContent = "";
    resultado.textContent = "";
    if (input.value === "" || altura < 1) {
        error.textContent = "Ingresá un número mayor a 0.";
        return;
    }
    resultado.textContent = generarAsteriscos(altura);
});
