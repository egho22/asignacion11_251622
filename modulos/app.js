import * as modulo from "./saludo.mjs"

console.log(modulo.saludar("Martin"))
console.log(modulo.sumar(5,10))

import Estudiante from "./Estudiante.js"

let estudiante1 = new Estudiante();
estudiante1.nombre = "Martin";
estudiante1.carrera = "ISW";

console.log(estudiante1.saludar())
console.log(estudiante1.estudiar())
console.log(estudiante1.verPromedio())
