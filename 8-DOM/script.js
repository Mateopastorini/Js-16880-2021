/*
console.log(document.getElementById('parrafo1').childNodes[0].data)
console.log(document.getElementsByClassName('parrafos')[0].children[0].childNodes[0].data)
console.log(document.getElementsByTagName('p')[0].childNodes[0].data)

let parrafos = document.getElementById("parrafos")

for(let i = 0; i < 10; i++) {
    let parrafo = document.createElement('p') //<p> </p>
    parrafo.id = "parrafo4"                     //<p id="parrafo4"></p>
    parrafo.classList = "parrafosRandom"        //<p id="parrafo4" class="parrafosRandom"></p>
    parrafo.innerText = "Vamos Argentina!"      //<p id="parrafo4" class="parrafosRandom">Vamos Argentina!</p>
    parrafos.appendChild(parrafo)
    setTimeout(()=> parrafos.removeChild(parrafo),3000)

}
*/
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Persona("Francisco", "Pugh", 40)
const persona2 = new Persona("Milton", "Salazar", 30)
const persona3 = new Persona("Cristian", "Ramirez", 20)
const persona4 = new Persona("Franco", "Suppa", 35)

let personas = [persona1, persona2, persona3, persona4] 

let divPersonas = document.getElementById("personas")

personas.forEach((persona, indice) => {
    divPersonas.innerHTML += `
        <div id="persona${indice + 1}">
            <p>Nombre: ${persona.nombre} </p>
            <p>Apellido: ${persona.apellido} </p>
            <p>Edad: ${persona.edad} </p>
        </div>
    `
})
