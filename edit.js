
//vamos a realizarle una breve encuenta al usuario
function solicitarUsuario() {
    let nombreUsuario = (prompt("Ingresá tu nombre de usuario"));
    console.log(nombreUsuario)
    while (nombreUsuario == "") {
        alert("NO INGRESASTE TU NOMBRE DE USUARIO");
        nombreUsuario = prompt("Por favor ingresá tu nombre de usuario para continuar con la compra");
        console.log(nombreUsuario)
    }
}

solicitarUsuario()

//cantidad de sembradoras que quiere el cliente
let cantidadSembradoras = parseInt(prompt("Ingrese la cantidad de sembradoras que desea comprar"))
console.log(cantidadSembradoras)
while (cantidadSembradoras < 0) {
    alert("No ingresaste ningun número para la cantidad de implementos")
    cantidadSembradoras = prompt("Por favor, ingrese la cantidad de sembradoras que desea comprar")
    console.log(cantidadSembradoras)
}
let precioSembradoras = 35000 
let totalSembradoras = precioSembradoras * cantidadSembradoras
console.log("El precio total de sembradoras es de" + " " +  totalSembradoras + " " +"usd")

// cantidad de tractores que quiere el cliente
let cantidadTractores = parseInt(prompt("Ingrese la cantidad de tractores que desea comprar"))
console.log(cantidadTractores)
while (cantidadTractores < 0) {
    alert("No ingresaste ningun número para la cantidad de tractores")
    cantidadTractores = prompt("Por favor, ingrese la cantidad de tractores que desea comprar")
    console.log(cantidadTractores)
}
let precioTractor = 20000
let totalTractores = precioTractor * cantidadTractores
console.log("El precio total de tractores es de" + " " +  totalTractores + " " +"usd")


//cantidad de casillas  que quiere el cliente
let cantidadCasillas = parseInt(prompt("Ingrese la cantidad de Casillas que desea comprar"))
console.log(cantidadCasillas)
while (cantidadCasillas < 0) {
    alert("No ingresaste ningun número para la cantidad de Casillas")
    cantidadCasillas = prompt("Por favor, ingrese la cantidad de Casillas que desea comprar")
    console.log(cantidadCasillas)
}
let precioCasilla = 15000
let totalCasillas = precioCasilla * cantidadCasillas
console.log("El precio total de casillas es de" + " " +  totalCasillas + "" + "usd")

let cantidadCisternas = parseInt(prompt("Ingrese la cantidad de Cisternas que desea comprar"))
console.log(cantidadCisternas)
while (cantidadCisternas < 0) {
    alert("No ingresaste ningun número para la cantidad de Cisternas")
    cantidadCisternas = prompt("Por favor, ingrese la cantidad de Cisternas que desea comprar")
    console.log(cantidadCisternas)
}
let precioCisterna = 18000
let totalCisternas = precioCisterna * cantidadCisternas;
console.log("El precio total de Cisternas es de" + " " +  totalCisternas + "" + "usd" )

let total = (totalSembradoras + totalTractores + totalCasillas + totalCisternas);
console.log("El precio total a pagar por todos los Implementos es de" + " " + " " + total + " " + "usd")

if (total >= 100000) {
    console.log("Tu compra supera los 100000 usd, por lo tanto el flete cuenta por cuenta nuestra")
    alert("Tu compra supera los 100000 usd, por tanto el flete cuenta por cuenta nuestra")
}
else if (total < 100000) {
    console.log("Además de tu compra, el envio es a cargo del cliente!")
    alert("Además de tu compra, el envio es a cargo del cliente!")
}