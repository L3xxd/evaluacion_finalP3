let products = [
    ["laptops", 1200],
    ["celulares", 850],
    ["memorias", 160],
    ["DVD",15]
];
// ---------------------------------------------------------------------------------------------------------------------
/*1. Diseña una función que reciba como argumento el nombre de un producto (minúscula) y devuelva su precio.
function findProduct(input) {
    
 const inventory = products.find(item => item[0] === input);
 return inventory ? inventory[1] : console.log("No existe");
}
console.log(findProduct("celularesss"))
*/
// ---------------------------------------------------------------------------------------------------------------------
// 2. Dieña una función que calcule el total de la compra de productos seleccionados
function buyProduct(cantLaptops, cantCelulares, cantMemorias) {

    const precioLaptop = products[0][1];
    const precioCelular = products[1][1];
    const precioMemoria = products[2][1];

    const total = (cantLaptops * precioLaptop) + (cantCelulares * precioCelular) +  (cantMemorias * precioMemoria);

    return total;
}

const totalAPagar = buyProduct(4, 5, 6);
console.log(`Total a pagar: ${totalAPagar}`);


// ---------------------------------------------------------------------------------------------------------------------
// 3. Diseña una función que aplique descuento a un producto específico y devolver el precio con descuento
function addDescount(descLaptops, descCelulares, descMemorias){
    const precioLaptop = products[0][1];
    const precioCelular = products[1][1];
    const precioMemoria = products[2][1];

        let  total = 0
        total = (descLaptops * precioLaptop);
        console.log("Precio con descuento laptops : " + (precioLaptop - total))

        total = (descCelulares * precioCelular);
        console.log("Precio con descuento celulares : " + (precioLaptop - total))

        total = (descMemorias * precioMemoria);
        console.log("Precio con descuento memeorias : " + (precioMemoria - total))



}

addDescount(0.15, 0.10, 0.25);


/* ---------------------------------------------------------------------------------------------------------------------
// 4. Diseña una función que elimine un producto específico

function deleteProduct(nombreProducto) {
    const nuevoArray = products.filter(item => item[0] !== nombreProducto);
    const eliminado = products.length !== nuevoArray.length;
    
    if (eliminado) {
        products = nuevoArray; // Actualizamos el array original
        return products;
    }
}
console.log(deleteProduct("DVD")); 
*/
/*---------------------------------------------------------------------------------------------------------------------
// 5. Diseña una función que Agrega un producto específico
function addProduct(nombre, precio) {
    products.push([nombre, precio]);
    console.log(products);

}

// Ejemplo de uso:
addProduct("TV", 1500);*/


/* ---------------------------------------------------------------------------------------------------------------------
// 6. Diseña una función que Busque un producto específico
function findProduct(nombre) {
    const producto = products.find(p => p[0] === nombre)
//producto ? producto : "Producto no encontrado;


    if (producto) {
        return producto;
    } else {
        return "Producto no encontrado";
    }

}

console.log(findProduct("celularefs")); */
