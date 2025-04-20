//Instrucciones: Escribir una función que reciba un array y una función callback.
//  La función debe aplicar el callback a cada elemento del array y retornar el nuevo array.

//procesar([1, 2, 3, x ⇒ x * 2; // 2, 4, 6

const procesar = (array, callback) => array.map(callback);

const numeros = [1, 2, 3];
const resultado = procesar(numeros, num => num * 2);
console.log(resultado);