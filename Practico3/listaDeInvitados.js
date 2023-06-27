let lista = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];

for (let i = 0; i < lista.length; i++){
    if (lista[i] === "Jose" || lista[i] === "Sofia"){
    rechazados.push(lista[i]);
} else {
    admitidos.push(lista[i]);
}
}
console.log("La lista de invitados admitidos es:")
for (let i = 0; i < admitidos.length; i++){
    console.log(admitidos[i])

}
console.log("La lista de invitados rechazados es:")
for (let i = 0; i < rechazados.length; i++){
    console.log(rechazados[i])

}


//Extra: segun la biblioteca de java, sort() peromite ordenar un arreglo numero o string

ordenadosadmitidos = admitidos.sort()

console.log("La lista ordenada de invitados admitidos es:")
for (let i = 0; i < admitidos.length; i++){
    
    console.log(ordenadosadmitidos[i])

}
ordenadosrechazados = rechazados.sort()


console.log("La lista ordenada de invitados rechazados es:")
for (let i = 0; i < rechazados.length; i++){
    
    console.log(ordenadosrechazados[i])

}