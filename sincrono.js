function procesarCalificaciones(){
    console.log("Iniciamos la evaluación");

    let calificaciones = [10,8,5,6,7,10];

    console.log("Calificaciones Originales", calificaciones);

    let aprobados = [];

    for(let i =0; i<calificaciones.length; i++){
        if(calificaciones[i] >=7){
            aprobados.push(calificaciones[i])
        }
    }

    console.log(aprobados)



    let reprobados = [];

    for(let i =0; i<calificaciones.length; i++){
        if(calificaciones[i] < 7){
            reprobados.push(calificaciones[i])
        }
    }

    console.log(reprobados)
    

    console.log("Terminé de evaluar")

}

procesarCalificaciones();