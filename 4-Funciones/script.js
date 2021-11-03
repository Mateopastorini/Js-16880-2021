/*
for(let i = 1; i < 11; i++) {
    console.log(i)
    for(let j= 1; j < 11; j++) {
        console.log(j)
        for(let k = 1; k < 11 ; k++) {
            console.log(k)
        }
    }
}

function de1a10 () {
    for(let i= 1; i < 11; i++) {
        console.log(i)
    }
}

de1a10()
de1a10()
de1a10()

function suma(num1, num2) {
    console.log(num1 + num2)
}

let num1 = parseFloat(prompt("Ingrese un numero"))
let num2 = parseFloat(prompt("Ingrese otro numero"))

suma(num1.num2)

const IVA = 0.21
let impuesto1 = 0.10
var impuesto2 = 0.20

function calculoIVA(producto) {
    const IVA = 0.50
    console.log(IVA)
    let impuesto1 = 0.20
    var impuesto2 = 0.30
    return producto * ( 1 + IVA + impuesto1 + impuesto2)
}

let producto1 = 100
console.log(IVA)
console.log(impuesto1)
console.log(impuesto2)

console.log(calculoIVA(producto1))


const suma = function (num1, num2) { return num1 + num2}
const resta = function (num1, num2) { return num1 - num2}
const multiplicacion = function (num1, num2) { return num1 * num2}
const division = function (num1, num2) { return num1 / num2}
*/

const suma = (num1,num2) => num1 + num2
const resta = (num1,num2) => num1 - num2
const multiplicacion = (num1,num2) => num1 * num2
const division = (num1,num2) => num1 / num2

do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion (+,-,*,/)")
    
    if(operacion == "/" && numero2 == 0) {
        alert("No se puede dividir entre 0")
    }

    if(isNaN(numero1) || isNaN(numero2)) {
        alert("Debe ingresar un numero valido")
    }

} while((isNaN(numero1) || isNaN(numero2)) || (operacion == "/" && numero2 == 0))


if(operacion == "+") {
    console.log(suma(numero1,numero2))
} else if (operacion == "-") {
    console.log(resta(numero1, numero2))
} else if(operacion == "*") {
    console.log(multiplicacion(numero1, numero2))
} else if(operacion == "/") {
    console.log(division(numero1, numero2))
}  else {
    console.log("Operacion no valida")
}

