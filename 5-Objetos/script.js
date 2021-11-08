/*
let nombreCliente1 = "Francisco"
let apellidoCliente1 =  "Pugh"
let edadCliente1 =  70
let sueldoCliente1 = 1000

let nombreCliente2 = "Milton"
let apellidoCliente2 =  "Salazar"
let edadCliente2 =  18
let sueldoCliente2 = 2000

const cliente1 = {nombre: "Francisco Pugh", edad: 70, sueldo:1000, prestamosSacados: 0}
const cliente2 = {nombre:"Milton Salazar", edad:18, sueldo:2000, prestamosSacados: 3}

console.log(cliente1["nombre"])
console.log(cliente1.nombre)
console.log(cliente2)

console.log(cliente1)
cliente1.edad = 29
console.log(cliente1)

cliente1 = cliente2
console.log(cliente1)


function Cliente(nombre, edad, sueldo, prestamos) {
    this.nombre = nombre;
    this.edad = edad;
    this.sueldo = sueldo;
    this.prestamos = prestamos;
    this.retirarFondos = function(sueldoRetirar) {
        this.sueldo -= sueldoRetirar
        console.log(`Retiraste $${sueldoRetirar}, te quedan en tu sueldo $${this.sueldo}`)
    }
    this.cargarPrestamo = function() {
        this.prestamos++
    }
}

const cliente1 = new Cliente("Gonzalo Ledesma", 50, 600,5)
const cliente2 = new Cliente("Exequiel Mazzeo", 19, 800)
console.log(cliente1)
console.log(cliente2)

cliente1.retirarFondos(200)
cliente1.cargarPrestamo()
console.log(cliente1)
*/

class Cliente {
    constructor(nombre, edad , sueldo, prestamos) {
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
        this.prestamos = prestamos;
    }

    retirarFondos(sueldoRetirar) {
        this.sueldo -= sueldoRetirar
        console.log(`Retiraste $${sueldoRetirar}, te quedan en tu sueldo $${this.sueldo}`)
    }

    cargarPrestamo() {
        this.prestamos++
    }
}

const cliente1 = new Cliente("Francisco Pugh", 30, 1000, 2)
console.log(cliente1)

for(let atributo in cliente1) {
    console.log(`${atributo} ${cliente1[atributo]}`)
}

class Animal {
    constructor(nombre, especie, peso, color, edad, cantidadOjos, cantidadPatas) {
        this.nombre = nombre;
        this.especie = especie;
        this.peso = peso;
        this.color = color;
        this.edad = edad;
        this.cantidadOjos = cantidadOjos;
        this.cantidadPatas = cantidadPatas
    }

    comer() {
        console.log(`El animal ${this.nombre} esta comiendo, no lo molesten`)
    }

    moverse(velocidad) {
        console.log(`El animal ${this.nombre} se esta moviendo a ${velocidad} km/h`)
    }

    retornarDatos() {
        return `${this.nombre},${this.especie},${this.peso},${this.color},${this.edad},${this.cantidadOjos},${this.cantidadPatas}`
    }
}

const animal1 = new Animal("Tigre", 120, "Blanco y naranja", 30, 2, 4)
const animal2 = new Animal(prompt("Ingrese un nombre"), prompt("Ingrese una especie"), parseFloat(prompt("Ingrese un peso")), prompt("Ingrese un color"), 20, 2, 4)
console.log(animal2.retornarDatos())
console.log(animal1.retornarDatos())
animal1.moverse(15)
animal1.comer()