const btn = document.getElementById("btnGenerar") as HTMLButtonElement;
const input = document.getElementById("inputAltura") as HTMLInputElement;
const resultado = document.getElementById("resultado") as HTMLElement;
const error = document.getElementById("mensajeError") as HTMLElement;

function generarAsteriscos(altura: number): string {
    let arbol = "";
    for (let i = 1; i <= altura; i++) {
        for (let j = 0; j < i; j++) {
            arbol = arbol + "*";
        }
        arbol = arbol + "\n";
    }
    return arbol;
}

btn.addEventListener("click", function() {
    const altura = parseInt(input.value);

    error.textContent = "";
    resultado.textContent = "";

    if (input.value === "" || altura < 1) {
        error.textContent = "Ingresá un número mayor a 0.";
        return; 
    }

    resultado.textContent = generarAsteriscos(altura);
});     