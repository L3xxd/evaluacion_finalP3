//1. Desarrolla una función recursiva que calcule el factorial de un número.
function factorialCalc(number) {
    if(number === i){
        return console.log(`El factorial de ${number} es ${factorial}`)
    } else {
        factorial *= i
        i++
        factorialCalc(number)
    }
}
let factorial= 1
let i = 1
factorialCalc(10)

// ---------------------------------------------------------------------------------------------------------------------
//2. Escribe una función recursiva que calcule el n número de Fibonacci.
// 
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
     return fibonacci(n - 1) + fibonacci(n - 2);
}
const target = 10
console.log(fibonacci(target))

// ---------------------------------------------------------------------------------------------------------------------

//3. Escribe una función recursiva que revierta una cadena de texto.
function revertString(cadena){
    if (cadena.length <= 1) {
        return cadena;
    }
    return cadena.slice(-1) + revertString(cadena.slice(0, -1));
}

console.log(revertString("holaaaaa"))