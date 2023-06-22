const readlineSync = require('readline-sync');
const mesElegido = readlineSync.question('Ingrese un numero del mes del 1 al 12 ');

let diasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let nombreMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre","Noviembre","Dicimbre"];

console.log("La candidad de dias del mes de %s es %i dias", nombreMes[mesElegido-1], diasMeses[mesElegido-1])