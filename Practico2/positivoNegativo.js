const readlineSync = require('readline-sync');
const numero = readlineSync.question("ingrese un numero ");

let numeroPos = "El numero es positivo"
let numeroCero = "El numero es cero"
let numeroNeg = "El numero es negativo"
let tipoNumero;

if (numero > 0){
    tipoNumero = numeroPos
}else if (numero === 0){
    tipoNumero = numeroCero
}else{
    tipoNumero = numeroNeg
}
console.log(tipoNumero);