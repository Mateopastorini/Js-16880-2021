/*
const mensaje = "Hola, ingresame un nombre por favor"

function pedirDatos(mensaje) {
    return prompt(mensaje)
}

function mostrarDatos(nombre) {
    console.log(nombre)
}

function programaPrincipal() {
    const mensaje = "Hola, ingresame un nombre"
    mostrarDatos(pedirDatos(mensaje))
}

console.log(mensaje)
mostrarDatos(mensaje)
programaPrincipal()
console.log(mensaje)
*/
const IVA = 1.21
//const calcIva = function (producto) {return producto * IVA}

const calcIva2 = (producto) => producto * IVA
const pedirProducto = () => parseFloat(prompt("Ingrese un producto"))
const mostrarProducto = (producto) => console.log(`El producto mas el IVA es ${producto}`)

mostrarProducto(calcIva2(pedirProducto()))