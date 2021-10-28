/*
let numero = 100;

if(numero == 10) {
   console.log(true)
} else {
    console.log(false)
}

if(numero > 900){
    console.log(true)
}

if(numero <= 100){
    console.log(true)
}

if(numero === "100") {
    console.log(true)
} else {
    console.log(false)
}

numero !== "100" ? console.log(true) : console.log(false)


let numero1 = 30
let numero2 = 40
let numero3 = 50
let numero4 = 20
        //numero1 === "30"
if (!(!(numero1 !== "30" && numero2 == 40) || !(numero3 > 50 && numero4 === "20"))){
    console.log(true)
} else {
    console.log(false)
}
*/
/*
    && = Verdadero si condicion1 y condicion2 son verdaderas
    || = Falso si condicion1 y condicion2 son falsos
    ! = Si cond1 es verdadero, pasa a ser falso y viceversa
*/

let numero1 = parseFloat(prompt("Ingrese el primer numero"))
let numero2 = parseFloat(prompt("Ingrese el siguiente numero"))
let operacion = prompt("Ingrese la operacion a realizar(+,-,*,/)")

if(!isNaN(numero1) && !isNaN(numero2)) {
    if (operacion == "+") {
        console.log(numero1 + numero2)
    } else if(operacion == "-") {
        console.log(numero1 - numero2)
    } else if(operacion == "/") {
        if(numero2 === 0)
            console.log("No se puede dividir entre cero")
        else 
            console.log(numero1 / numero2)
    } else if(operacion == "*") {
        console.log(numero1 * numero2)
    } else {
        console.log("Operacion no valida")
    }
} else {
    console.log("Numeros no validos")
}
