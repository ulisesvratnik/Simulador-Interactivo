 let carritoDeCompra = "Model Import"


function agregarAlCarritoT500(producto, stock) {
    const tenemosStock = validarStock(stock);
    if(tenemosStock === 'Tenemos stock'){
        console.log('Agregas el producto al carrito: ' + producto);
    }else{
        console.log('Lo sentimos no tenemos en stock el ' + producto);
    }
}

function validarStock(stockDelProducto) {
    if(stockDelProducto > 0){
        return 'Tenemos stock';
    }else{
        return 'Disculpe no tenemos en stock';
    }
}

const stockQueTieneElProducto = alert("Del modelo T500 Negro tenemos en total 23 unidades")
const cantidadQueDeseasDelProducto = prompt("¿Usted Cuantas unidades de este modelo Deseas?")

agregarAlCarritoT500('SmartWatch T500 Plus - Negro', stockQueTieneElProducto, cantidadQueDeseasDelProducto);

function validarStock(cantidad) {
    if(23 >= cantidadQueDeseasDelProducto){
        return 'Tenemos stock';
    }else{
        return 'Disculpe no tenemos en stock';
    }
}

function agregarAlCarrito(producto, stock) {
    const tenemosStock = validarStock(stock);
    if(tenemosStock === 'Tenemos stock'){
        console.log('Agregas el producto al carrito: ' + producto);
    }else{
        console.log('Lo sentimos no tenemos en stock el ' + producto);
    }
}

function validarStock(stockDelProducto) {
    if(stockDelProducto > 0){
        return 'Tenemos stock';
    }else{
        return 'Disculpe no tenemos en stock';
    }
}

agregarAlCarrito('SmartWatch T500 Plus - Blanco', 10);
agregarAlCarrito('SmartWatch T500 Plus - Rosa', 0);

agregarAlCarrito('Smartband Inteligente D20s - Negro', 3);
agregarAlCarrito('Smartband Inteligente D20s - Blanco', 0);
agregarAlCarrito('Smartband Inteligente D20s - Rosa', 9);

agregarAlCarrito('Smartband Inteligente M5 PRO - Negro', 11);
agregarAlCarrito('Smartband Inteligente M5 PRO - Blanco', 0);
agregarAlCarrito('Smartband Inteligente M5 PRO - Rosa', 4); 


/* **************************************************************************************************** */

let nombre = prompt ("Ingrese nombre y apellido del alumno");
let notas1 =parseInt(prompt("Ingrese la 1er nota del alumno"));
let notas2 =parseInt(prompt("Ingrese la 2er nota del alumno"));
let notas3 =parseInt(prompt("Ingrese la 3er nota del alumno"));

let listadoNotas = [notas1, notas2, notas3];

function contadorDeNotas(listadoNotas){
    let contadorNotas=0;
    for (let i = 0; i < 3; i++){
        contadorNotas += listadoNotas[i];
    }
    return contadorNotas;
}

let contador = contadorDeNotas(listadoNotas);

function sacarPromedio(contador){
    let promedio = Math.round(contador/3);
    return promedio;
}

let promedio1 = sacarPromedio(contador);

if (promedio1 > 6){
    alert ("La nota promedio de" + nombre + " " + "es de: " + promedio1 + "." + " Esta aprobado.")  
}else{
    alert ("La nota promedio de" + nombre + " " + "es de: " + promedio1 + "." + " Esta desaprobado.")  
}
