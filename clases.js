class Persona {
    
    constructor(nombre = "", edad=0){
        this.nombre = nombre;
        this.edad = edad;
        this.id = this.#generarID();
    }

    saludar(){
        return `Hola, soy ${this.nombre}`

    }

    #generarID(){
        return Math.floor(Math.random * 1000);
    }

    


}

class Estudiante extends Persona {
    constructor(){
        super();
        this.carrera ="";
    
    }


    estudiar(){
        return `${this.nombre} está estudiando ${this.carrera}`

    }

    calcularPromedio(){
        return 70;
    }

    verPromedio(){
        return `Promedio: ${this.calcularPromedio}`
    }


}

let estudiante1 = new Estudiante();
estudiante1.nombre = "Martin";
estudiante1.carrera = "ISW";

console.log(estudiante1.saludar())
console.log(estudiante1.estudiar())
console.log(estudiante1.verPromedio())
