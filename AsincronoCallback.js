function ObtenerUsuarios(callback){
    setTimeout(()=>{
        let usuario = {
            nombre: "martin",
            edad: 26
        }

        callback(usuario)

    }, 2000)
}

console.log("Inició la búsqueda");

ObtenerUsuarios((usuario) => {
    console.log("Usuario encontrado", usuario);
    console.log("Finalizó la búsqueda")
})

