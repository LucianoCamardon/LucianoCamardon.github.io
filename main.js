const listaDeAlumnos=[]
let nombre;
let primeraNota;
let segundaNota;
let terceraNota;
let promedio;

class alumno{
    constructor(nombre,promedio, nota1, nota2, nota3){
    this.nombre=nombre;
    this.promedio=promedio;
    this.nota1=nota1;
    this.nota2=nota2;
    this.nota3=nota3;
    }
}
const Paredes = new alumno("Armando Paredes", 5, 10, 1, 4); listaDeAlumnos.push(Paredes)
const Banquitos= new alumno("Armando Banquitos",6 , 7, 5, 6); listaDeAlumnos.push(Banquitos)
const Sillitas= new alumno("Armando Sillitas", 6, 6, 4, 8); listaDeAlumnos.push(Sillitas)
const Techitos= new alumno("Armando Techitos", 1 ,1,1,1); listaDeAlumnos.push(Techitos)
const Juan= new alumno("Juan", 7, 7,6,8); listaDeAlumnos.push(Juan)


let ingresarNombreDeAlumno = () => {
    do{
        nombre=prompt("Ingrese el nombre del alumno")
        if(!isNaN(nombre)){alert("El nombre no puede contener números")}
    }while(!isNaN(nombre))

    return nombre;
}
let ingresarPrimeraNota= () =>{
    do{primeraNota=parseFloat(prompt("Ingrese la primer nota"));
    if(isNaN(primeraNota) || primeraNota==""){alert("La nota debe ser un numero")}
    }while(isNaN(primeraNota) || primeraNota=="")

    return primeraNota;
} 
let ingresarSegundaNota= () =>{
    do{segundaNota=parseFloat(prompt("Ingrese la segunda nota"));
    if(isNaN(segundaNota) || segundaNota==""){alert("La nota debe ser un numero")}
    }while(isNaN(segundaNota) || segundaNota=="")
    return segundaNota;
} 
let ingresarTerceraNota= () =>{
    do{terceraNota=parseFloat(prompt("Ingrese la tercera nota"));
    if(isNaN(terceraNota) || terceraNota==""){alert("La nota debe ser un numero")}
    }while(isNaN(terceraNota) || terceraNota=="")

    return terceraNota;
}
let calcularPromedio=()=>{
    promedio=(primeraNota + segundaNota + terceraNota)/3;
}
let crearNuevoAlumno=()=>{
    let nuevoAlumno= new alumno(nombre, promedio, primeraNota, segundaNota, terceraNota)
    listaDeAlumnos.push(nuevoAlumno);
}
const ejecutarPrograma=()=>{
    ingresarNombreDeAlumno();
    ingresarPrimeraNota();
    ingresarSegundaNota();
    ingresarTerceraNota();
    calcularPromedio();
    crearNuevoAlumno();
}
ejecutarPrograma();

for(let i=0; i<listaDeAlumnos.length; i++){
    if (listaDeAlumnos[i].nombre==="Juan")continue;

    console.log("======================================================================================================")
    console.log(`Alumno ${i+1}: ${listaDeAlumnos[i].nombre}`)
    console.log(`Promedio: ${listaDeAlumnos[i].promedio}`)
    console.log(`Nota primer examen: ${listaDeAlumnos[i].nota1}`)
    console.log(`Nota segundo examen: ${listaDeAlumnos[i].nota2}`)
    console.log(`Nota tercer examen: ${listaDeAlumnos[i].nota3}`)
}
alert("Donde está juan!??")
alert("¡ACA TA!:D")
const imagenJuan=document.getElementById("imagen");
imagenJuan.style.display="block";
console.log(listaDeAlumnos.find(alumno=>alumno.nombre==="Juan"))