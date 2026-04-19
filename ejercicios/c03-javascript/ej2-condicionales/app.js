// Recibe una nota y devuelve si aprobó, desaprobó o promocionó
function clasificarNota(nota) {
    if (nota < 4) {
        return "Desaprobado";
    } else if (nota >= 4 && nota < 8) {
        return "Aprobado";
    } else {
        return "Promocionado";
    }
}

// Recibe un número del 1 al 7 y devuelve el nombre del día
function diaDeLaSemana(numero) {
    switch (numero) {
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miércoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sábado (fin de semana)";
        case 7: return "Domingo (fin de semana)";
        default: return "Día inválido";
    } 
}

// Pruebas
console.log(clasificarNota(2));  
console.log(clasificarNota(6));  
console.log(clasificarNota(65)); 
console.log(clasificarNota(10)); 


console.log(diaDeLaSemana(8));    
console.log(diaDeLaSemana(1));    
console.log(diaDeLaSemana(6));  

