const readlineSync = require('readline-sync');

function obtenerJugadaUsuario(){
    const opciones = ["piedra", "papel", "tijera"];
    let jugada1 = readlineSync.question('JUGADOR 1: elija Piedra, Papel o Tijera?: ', { hideEchoBack: true }).toLowerCase()
    while (!opciones.includes(jugada1)){
        console.log("debe elejir entre Piedra, Papel o Tijera");
        jugada1 = readlineSync.question('JUGADOR 1: elija Piedra, Papel o Tijera?: ', { hideEchoBack: true }).toLowerCase()
    }
    return jugada1
};

function obtenerJugadaComputadora(){
    const opciones = ["piedra", "papel", "tijera"];
    let jugada2 =  opciones [(Math.round(Math.random()*10))]
    while (!opciones.includes(jugada2)){
        jugada2 = opciones [(Math.round(Math.random()*10))]
    }
    return jugada2
};

function determinarGanador(jugadaUsuario,jugadaComputadora){

let rondasGanadasJugador1 = 0;
let rondasGanadasJugador2 = 0;


while(rondasGanadasJugador1 - rondasGanadasJugador2 !== 2 && rondasGanadasJugador2 - rondasGanadasJugador1 !== 2){


    let jugador1 = obtenerJugadaUsuario();
    console.log("el jugador1 eligio: %s", jugador1);
    
    
    let jugador2 =  obtenerJugadaComputadora()
    console.log("el jugador2 eligio: %s", jugador2);

    if (jugador1==jugador2){
        console.log("Empete");
    
    }else if(jugador1 == "piedra" && jugador2=="tijera" ||
            jugador1 == "papel" && jugador2=="piedra" ||
            jugador1 == "tijera" && jugador2=="papel"){
        rondasGanadasJugador1++;
        console.log("gana la ronda el JUGADOR 1");
        
    }else {
        rondasGanadasJugador2++;
        console.log("gana la ronda el JUGADOR 2");
        
    }

}

if (rondasGanadasJugador1 > rondasGanadasJugador2) {
    return "Ganador JUGADOR 1";
  } else {
    return "Gana JUGADOR 2";
  }
}

const jugadaComputadora = obtenerJugadaComputadora();
const jugadaUsuario = obtenerJugadaUsuario();
const resultado = determinarGanador(jugadaUsuario,jugadaComputadora);


console.log("La computadora eligió: " + jugadaComputadora);
console.log("El usuario eligió: " + jugadaUsuario);
console.log("El resultado fue: " + resultado);