function ObtenerUsuarios(){
    setTimeout(()=>{
        let usuario = {
            nombre: "martin",
            edad: 26
        }

        return usuario;

    }, 2000)
}

console.log("Inició la búsqueda");
let usuario = ObtenerUsuarios();
console.log("Usuario encontrado: ", usuario)
console.log("Fin de la búsqueda");