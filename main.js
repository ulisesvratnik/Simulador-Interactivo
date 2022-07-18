class Producto {
    constructor(id, modelo, color, precio, stock) {
        this.id = id
        this.modelo = modelo
        this.color = color
        this.precio = precio
        this.stock = stock

        if (stock == 0) {
            console.log('Lamentemos mucho informarle que no tenemos stock del modelo solicitado')
        }
    }
}

const productos = []

productos.push (new Producto(2020, "SmartWatch T500 Plus", "Negro", 3799, 17))
productos.push (new Producto(2021, "Smartband Inteligente D20s", "Blanco", 2499, 7))
productos.push (new Producto(2022, "Smartband Inteligente M5 PRO", "Rosa", 1999, 0))

const carritoDeCompra = []

function agregarAlCarrito(productos){
    carritoDeCompra.push(productos)
    console.log(productos)
}

agregarAlCarrito({id: 2020, modelo: "SmartWatch T500 Plus", color: "Negro", precio: 3799, stock: 17})
agregarAlCarrito({id: 2021, modelo: "Smartband Inteligente D20s", color: "Blanco", precio: 2499, stock: 7})
agregarAlCarrito({id: 2022, modelo: "Smartband Inteligente M5 PRO", color: "Rosa", precio: 1999, stock: 0})

function borrarProductoDelCarrito(idDelProducto) {
    const index = carritoDeCompra.findIndex((producto) => producto.id === idDelProducto);

    if (index !== -1) {
        carritoDeCompra.splice(index, 1);
    }

    console.log(carritoDeCompra);
}
borrarProductoDelCarrito(2020);
borrarProductoDelCarrito(2024);
borrarProductoDelCarrito(2021);