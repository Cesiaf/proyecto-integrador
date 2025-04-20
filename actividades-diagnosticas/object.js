// Dado el siguiente objeto: const persona = { nombre: "Lucía", edad: 28, profesion: "Diseñadora",};
// Mostrar en consola un mensaje que diga: "Lucía tiene 28 años y trabaja como Diseñadora." 
// usando desestructuración.
//  Agregar una nueva propiedad al objeto llamada ciudad con el valor "Rosario" .

const persona = {nombre: "Lucía", edad : 28, profesion : "Diseñadora",};
const { nombre, edad, profesion } = persona;
console.log(
  `${persona.nombre} tiene ${persona.edad} años y trabaja como ${persona.profesion}`);

  
Object.assign(persona, { ciudad: "Rosario" });

console.log(
    `${persona.nombre} tiene ${persona.edad} años y trabaja como ${persona.profesion} y vive en ${persona.ciudad}`
);