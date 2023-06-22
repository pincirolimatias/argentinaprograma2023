const readlineSync = require('readline-sync');
const numero = readlineSync.question('Elija un numero del 1 al 7 que represtente los dias de la semana  ');
let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

if (numero<8 && numero>0){
    console.log("Hoy es %s ", diasSemana[numero-1])
}else{
    console.log("Numero es invalido")
}
