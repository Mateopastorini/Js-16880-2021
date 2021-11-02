console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

let acumulador = 0;

for(let i=1; i < 11; i++) {
    console.log(i)
}

// i++ es igual a i = i + 1
/*

for(let i = 1; i < 11; i++) {
    let nota = parseInt(prompt("Ingrese una nota"))
    acumulador += nota // acumulador = acumulador + nota
    console.log(acumulador)
}

console.log("El promedio es " + (acumulador / 10))
*/
/*
let esVerdadero = true
let cant = 0

while(esVerdadero != "no") {
    let nota = parseInt(prompt("Ingrese una nota"))
    acumulador += nota 
    cant++
    esVerdadero = prompt("¿Desea ingresar mas notas?").toLowerCase() //NO, No, nO, no
} 

console.log("El promedio es " + (acumulador / cant))


let cant = 0;

do {
    let nota = parseInt(prompt("Ingrese una nota"))
    acumulador += nota 
    cant++
    var esVerdadero = prompt("¿Desea ingresar mas notas?").toLowerCase()
} while(esVerdadero != "no" )

console.log("El promedio es " + (acumulador / cant))


for(let i = 1; i < 11; i++) {
    
    if(i == 5) {
        continue
    }
    console.log(i)
}

*/

let numero1;
let numero2;
let operacion;

do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion (+,-,*,/)")
} while(isNaN(numero1) || isNaN(numero2))

switch(operacion) {
    case "+":
        console.log(numero1 + numero2)
        break
    case "-":
        console.log(numero1 - numero2)
        break
    case "/":
        console.log(numero1 / numero2)
        break
    case "*":
        console.log(numero1 * numero2)
        break
    default:
        console.log("Operacion no valida")
        break
}

