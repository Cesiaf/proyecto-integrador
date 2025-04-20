// Usar map para generar un nuevo array con los números al cuadrado. 
// Usar filter para obtener los números mayores a 5. 
// Escribir una función flecha que reciba un número y devuelva si es par o impar.

const numeros = [3, 7, 12, 5, 2]

const cuadrados = numeros.map(num => num ** 2);
const mayor_5 = numeros.filter(num => num > 5);

console.log("Array de cuadrados generado:");
console.log(cuadrados);
console.log("Array de números mayores a 5 generado:");
console.log(mayor_5);
console.log("----------------------------");

const nombreDeLaFuncion = (parametro) =>
  condicion ? valorSiVerdadero : valorSiFalso;

const par_impar = (num2) =>
    num2 % 2 == 0 ? "par" : "impar";

const readline =  require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});    

rl.question('Ingrese un número: ', input => {
    const numero = parseInt(input);
    const resultado = par_impar(numero);
    console.log(`El número ${numero} es ${resultado}. `);
    rl.close();   
})

