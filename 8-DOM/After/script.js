class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
}

const producto1 = new Producto("Auriculares", "Samsung", 400, 30)
const producto2 = new Producto("Parlante", "Philips", 14000, 20)
const producto3 = new Producto("Notebook", "Asus", 90000, 10)
const producto4 = new Producto("Teclado", "Noga", 2000, 50)

let productos = [producto1, producto2, producto3, producto4]

let divProductos = document.getElementById('divProductos')

productos.forEach((producto, indice) => {
    divProductos.innerHTML += `
    <div class="card" id="producto${indice + 1}" style="width: 18rem;">
        <img src="./img/producto${indice + 1}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Producto N° ${indice + 1}</h5>
            <p class="card-text">Nombre: ${producto.nombre}</p>
            <p class="card-text">Marca: ${producto.marca}</p>
            <p class="card-text">Precio: ${producto.precio /*Aplicar descuento: -(producto.precio * 0.3)*/} </p>
            <p class="card-text">Stock: ${producto.stock}</p>
            <a href="#" class="btn btn-danger" id="boton${indice+1}">Eliminar</a>
        </div>
    </div>
    `
})

//Calcular total stock
let acum = 0;

productos.forEach(producto => {
    acum += producto.stock
    console.log(acum)
})
