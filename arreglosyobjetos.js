let numeros =[1,2,3,4,5];
let caracteres = ["A", "B", "C", "D"];
let arreglo = [[], []];
let objetos = [{},{},{}];



//Agregar al final de la lista
numeros.push(6)

console.log(numeros)


//Agregar al inicio de la lista

numeros.unshift(0)
console.log(numeros)

//Eliminar al iniicio de la lista

numeros.shift()
console.log(numeros)

//Longitud del arreglo
console.log(numeros.length)

console.log(numeros.includes(2))
console.log(numeros.includes(10))

console.log(numeros.indexOf(3))

//map recorrer el arreglo y crear uno nuevo transformando cada elemento de la lista

let dobles = numeros.map(num => num*2)

console.log(dobles)

let encontrados = numeros.filter(num => num >= 3)

console.log(encontrados)

let encontrado = numeros.find(num => num == 3)

console.log(encontrado)

const persona = {
    nombre : "juan",
    edad: 26,
    ciudad: "cdmx",
    hobbies: ["futbol", "musica"],
    direccion: {
        calle: "av siempre viva",
        numero: 123

    },

    saludar: function(){
        return "hola, soy "+this.nombre
    
    }
}


console.log(persona)

console.log(persona.saludar())
