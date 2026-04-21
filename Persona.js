 export default class Persona {
    
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