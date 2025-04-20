//Dado el siguiente array de objetos
// Usar filter para obtener solo los productos cuyo precio sea mayor a 100. 
// Usar map para obtener un nuevo array de strings con el siguiente formato: 
// "Notebook: $1200" 
// Usar reduce para calcular el precio total de todos los productos.
// Combinar filter y map para obtener los nombres de los productos que cuesten menos de 100,
// todo en minúsculas.
const productos = [
  { nombre: "Notebook", precio: 1200 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 30 },
  { nombre: "Auriculares", precio: 80 },
];

// 1. Productos con precio mayor a 100
const precio_mayor_100 = productos.filter((producto) => producto.precio > 100);

// 2. Formato nuevo: "nombre : precio"
const formato_nuevo = productos.map(
  (producto) => `${producto.nombre} : ${producto.precio}`
);

// 3. Precio total de todos los productos
const precio_total = productos.reduce(
  (acumulador, producto) => acumulador + producto.precio,
  0
);

// 4. Nombres en minúscula de productos con precio < 100
const menos_100 = productos
  .filter((producto) => producto.precio < 100)
  .map((producto) => producto.nombre.toLowerCase());

console.log("📦 Productos con precio > 100:");
console.table(precio_mayor_100);

console.log("🧾 Formato personalizado (nombre : precio):");
formato_nuevo.forEach((linea) => console.log(" -", linea));

console.log("💰 Precio total de todos los productos:", `$${precio_total}`);

console.log("🔻 Productos con precio < 100 (minúsculas):");
menos_100.forEach((nombre) => console.log(" -", nombre));