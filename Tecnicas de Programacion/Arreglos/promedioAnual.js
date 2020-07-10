let readlineSync=require("readline-sync"); 
let cantidadAlumnos=readlineSync.questionInt("Ingrese cantidad de alumnos a almacenar: ");  
let arregloAlumnos=[]; 
let primerTrimestre=[]; 
let segundoTrimestre=[]; 
let tercerTrimestre=[]; 

for(let i=0;i<cantidadAlumnos;i++){
     arregloAlumnos[i]=readlineSync.question("Ingrese nombre del alumno: "); 
    primerTrimestre[i]=readlineSync.questionInt("Ingrese nota del primer trimestre: ");
    segundoTrimestre[i]=readlineSync.questionInt("Ingrese nota del segundo trimestre: ");
    tercerTrimestre[i]=readlineSync.questionInt("ingrese nota del tercer trimestre: "); 
}  
 
let nombreAlumno=readlineSync.question("Ingrese nombre del alumno para saber promedio: ");  
let sumaNotas=0; 
let promedio=0;
for(let i=0;i<cantidadAlumnos;i++){ 
    if(nombreAlumno==arregloAlumnos[i]){ 
         sumaNotas=primerTrimestre[i]+segundoTrimestre[i]+tercerTrimestre[i]; 
       promedio=sumaNotas/3; 
    }else{ 
      console.log("El nombre del alumno ingresado no se encuentra registrado.")
    }
    
}console.log(promedio)