
//array donde vamos a cargar los libros
let catalogo =[]

class Libro{
    constructor(autor, año, titulo, precio){
        this.autor = autor,
        this.año = año,
        this.titulo = titulo,
        this.precio = precio
    }
}
//Instancias de objetos:

const libro1 = new Libro("Ernesto Sábato", 1961, "Sobre heroés y tumbas", 2300)

catalogo.push(libro1)
const aleph = new Libro("Jorge Luis Borges", 1949, "El aleph", 1650);
catalogo.push(aleph)
const libro2 = new Libro("Mario Benedetti", 1996, "Andamios", 2000);

catalogo.push(libro2)
const libro3 = new Libro("Gabriel García Marquez", 1967, "Cien años de soledad", 3000);

catalogo.push(libro3)
const libro4 = new Libro("Isabel Allende", 1994, "Paula", 2800);

catalogo.push(libro4)
const libro5 = new Libro("Jorge Luis Borges", 1944, "Ficciones", 1400);

catalogo.push(libro5)
const libro6 = new Libro("Mario Vargas Llosa", 1963, "La ciudad y los perros", 2000);

catalogo.push(libro6)


//MÉTODOS para aplicar a arrays

//find devuelve un único elemento, el primero que cumpla con la condición
console.log(catalogo.find(libro => libro.autor == "Jorge Luis Borges"))
//filter devuelve un array con todos los que cumplan la condición
console.log(catalogo.filter(elemento => elemento.autor == "Jorge Luis Borges"))

//filter y map
let valor =parseInt(prompt("ingrese el valor a buscar"))
console.log(catalogo.filter(libro => libro.precio >= valor))
console.log(catalogo.map(persona => persona.precio >= valor))


//función para agregar libro -- función que agrega un objeto a nuestro array de objetos
function agregarLibro(){
    let autorNuevo = prompt("Ingrese el nombre del autor");
    let añoNuevo =parseInt(prompt("Ingrese el año del nuevo libro"))
    let tituloNuevo =prompt("Ingrese el título");
    let precioNuevo =parseInt(prompt("Ingrese el precio"))
    const libro =new Libro(autorNuevo, añoNuevo, tituloNuevo,precioNuevo)
    console.log(libro);
    catalogo.push(libro)
}
//función para preguntar si quiere ingresar
function pregunta(){
    let consulta = prompt("Quiere sumar un libro al catálogo (si/no)")
    if(consulta.toLowerCase()=="si"){
        agregarLibro()
        pregunta()
    }else{
        alert("Gracias, puede consultar en la consola nuestro catalogo")
    }
}
pregunta()



//  método sort
//  Documentación útil:
//  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//  https://davidyero.medium.com/ordenar-arreglo-de-objetos-por-propiedad-o-atributo-javascript-56f74fc48906

// Ordenar por dato númerico: si a.tributo - b.atributo (de menor a mayor); si b.atributo - a.atributo (mayor a menor)
catalogo.sort(function(a,b) {
    return a.precio - b.precio;
  });
  console.log(catalogo);

// Ordenar por cadena de string:  
//   catalogo.sort(function (a, b) {
//     if (a.autor > b.autor) {
//       return 1;
//     }
    
//     if (a.autor < b.autor) {
//       return -1;
//     }
    
//     // a must be equal to b
//     return 0;
//   });




