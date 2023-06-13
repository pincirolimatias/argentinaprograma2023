let var1 = 1;
let var2 = 3;
let var3 = 8;
let var4 = 19;

//para que resultado final sea 44
//44 es dibisible por: 1,2,4,11,22,44
//si tomo que la multipicacion es 4*11
//la resta puede ser 19-8
//la suma puede ser 1+3

let suma = var1 + var2;
let resta = var4 - var3;
let resultadoFinal = suma * resta;

let esPar = ((resultadoFinal % 2) === 0);

console.log("Mis variables iniciales fueron: " + var1 + ", " + var2 + ", " + var3 + " y " + var4 + ". La respuesta a verificar si el resultado final es par es: " + esPar);
