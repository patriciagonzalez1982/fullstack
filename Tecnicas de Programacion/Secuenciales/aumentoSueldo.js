let readlineSync = require("readline-sync"); 
let sueldoActual= readlineSync.questionFloat("Ingrese el sueldo actual: "); 
let porcentajeAumento; 
let sueldoConAumento; 
let aumento

if(sueldoActual <= 15000){ 
    porcentajeAumento=0.20
    aumento=sueldoActual*porcentajeAumento
    sueldoConAumento=aumento+sueldoActual
    console.log("El aumento a aplicar es del 20%"); 
    console.log("El aumento de sueldo a percibir es:"+ aumento);
    console.log("El total a percibir es:"+ sueldoConAumento);
}
if(sueldoActual>=15001 &&  sueldoActual<= 20000){ 
    porcentajeAumento=0.10
    aumento=sueldoActual*porcentajeAumento
    sueldoConAumento=aumento+sueldoActual
    console.log("El aumento a aplicar es del 10% "); 
    console.log("El sueldo a percibir es: "+aumento); 
    console.log("El total a percibir es:"+ sueldoConAumento);
} 
if(sueldoActual>=20001 && sueldoActual<= 25000){ 
    porcentajeAumento=0.05
    aumento=sueldoActual*porcentajeAumento
    sueldoConAumento=aumento+sueldoActual
    console.log("El aumento a aplicar es del 5% "); 
    console.log("El sueldo a percibir es: "+ aumento); 
    console.log("El total a percibir es:"+ sueldoConAumento);
} 
if(sueldoActual>25000){ 
    console.log("El sueldo no percibe aumento.")
}