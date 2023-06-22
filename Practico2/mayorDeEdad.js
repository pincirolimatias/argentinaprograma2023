const readlineSync = require('readline-sync');
const edad = readlineSync.question('¡Cual es tu edad? ');

let mayorEdad = "Eres mayor de edad";
let menorEdad = "Eres menor de edad";
let suEdad;

if (edad >=18){
    suEdad = mayorEdad;
}else{
    suEdad = menorEdad;
}
console.log(suEdad);
