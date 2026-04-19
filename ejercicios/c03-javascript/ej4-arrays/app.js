const numeros = [4, 17, 3, 22, 8, 15, 6, 30, 65, 198, 1, 10, 0, 654];

let suma = 0;
let mayor = numeros[0]; // asumo que el primer número es el mayor y luego comparo
let menor = numeros[0]; // lo mismo para el menor

for (const n of numeros) {
    suma = suma + n;
    if (n > mayor) 
        mayor = n;
    if (n < menor) 
        menor = n;
}

const promedio = suma / numeros.length;

// Logs
console.log(`Suma: ${suma}`);
console.log(`Promedio: ${promedio.toFixed(2)}`); // mostrar sólo 2 decimales
console.log(`Mayor: ${mayor}`);
console.log(`Menor: ${menor}`);

// 
function generarAsteriscos(n) {
    let resultado = "";
    for (let i = 0; i < n; i++) {
        resultado = resultado + "*"; // A cada string vacío se le suma un * hasta llegar a n
    }
    return resultado;
}

console.log(generarAsteriscos(5)); // Retorna *****
console.log(generarAsteriscos(16));
console.log(generarAsteriscos(3));  