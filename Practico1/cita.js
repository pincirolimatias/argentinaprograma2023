let cita = "tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";
let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: " + tamañoDeCita);
//El tamaño de cita es 44
let indice = cita.indexOf(substring);
console.log("El indice del substring es: " + indice);
// el indice es 13
let citaRecivida = cita.slice(0,44-13);
console.log(citaRecivida);