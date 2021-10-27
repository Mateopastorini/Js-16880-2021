/*
let numero1 = 23
let numero2 = 23

if(numero == 20) {
    console.log("Numero igual a 20")
} else {
    console.log("Numero distinto de 20")
}

if(numero % 2 == 0) {
    console.log("Numero par")
} else {
    console.log("Numero impar")
}

if(0) {
    console.log("V")
}else {
    console.log("F")
}


if ("1" === 1) {
    console.log(true)
} else {
    console.log(false)
}

// < <= > >= == ===

if("1" !== 1) {
    console.log(true)
} else {
    console.log(false)
}

*/

let numero1 = 20
let numero2 = 41
let numero3 = 40 
let numero4 = 40 
if(numero1 == 20 && numero2 == 40) {
    console.log(true)
} else {
    console.log(false)
}

/*
    p         &&           q
    V          V           V
    V          F           F
    F          F           V
    F          F           F 
*/

if((numero1 == 20 || numero2 == 40) && (numero3 == 40 || numero4 == 50)) {
    console.log(true)
} else {
    console.log(false)
}

/*
    p         ||           q
    V          V           V
    V          V           F
    F          V           V
    F          F           F 
*/

//let notaIngresada = parseInt(prompt("Ingrese una nota"))
let nota = parseInt(Math.random() * 10)
console.log(nota)

let desaprobado = (nota > 0 && nota < 6)
let aprobado = (nota == 6 || nota==7)
let aprobadoMuyBien = (nota == 8 || nota == 9)
let aprobadoExcelente = (nota == 10)

if(desaprobado) {
    console.log("Estas desaprobado")
} else if(aprobado) {
    console.log("Estas aprobado")
} else if(aprobadoMuyBien) {
    console.log("Estas aprobado con nota de Muy Bien")
} else if(aprobadoExcelente) {
    console.log("Estas aprobado con nota de Excelente")
} else {
    console.log("Nota no valida")
}