/*
let biblioteca = []

let random = [5, "hola", true, {nombre: "Francisco", apellido: "Pugh"}, 10]
/*
for(let i = 0; i < random.length;i++) {
    console.log(random[i])
}

let var1 = "Francisco"
console.log(var1.length)

for(elemento in random) {
    console.log(elemento)
    console.log(random[elemento])
}

//console.log(random.toString())
//console.log(random.join("---"))

biblioteca.push({nombre: "Cinco semanas en globo", autor: "Julio Verne"})
biblioteca.push({nombre: "La isla misteriosa", autor: "Julio Verne"})

//console.log(biblioteca)

let libroEliminado = biblioteca.pop()
//console.log(biblioteca)
//console.log(libroEliminado)

let arrayConcat = biblioteca.concat(random)
console.log(arrayConcat)
//arrayConcat = arrayConcat.slice(1,3)
//console.log(arrayConcat)
arrayConcat.splice(3,2)
console.log(arrayConcat)

*/

let personas = [
    {
        nombre: "Gonzalo",
        apellido: "Ledesma",
        edad: 18,
        sueldo: 1000
    },
    {
        nombre: "Milton",
        apellido: "Salazar",
        edad: 27,
        sueldo: 1400
    },
    {
        nombre: "Exequiel",
        apellido: "Mazzeo",
        edad: 24,
        sueldo: 800
    },
    {
        nombre: "Francisco",
        apellido: "Pugh",
        edad: 30,
        sueldo: 1000
    }
]
/*
for(persona of personas) {
    console.log(persona)
    for(atributo in persona) {
        console.log(persona[atributo])
    }
}

console.log(typeof personas)
*/
console.log(personas.find(persona => persona.sueldo == 2000))
console.log(personas.filter(persona => persona.edad < 10 && persona.sueldo >1300))
console.log(personas.map(persona => persona.sueldo >1000))
