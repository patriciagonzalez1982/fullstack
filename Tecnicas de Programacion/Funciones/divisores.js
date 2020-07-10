//DIVISORES
let readlineSync=require("readline-sync");
let numero=readlineSync.questionInt("Ingrese un numero entero: ");
let cantidad=0;

let esMultiplo=(numero1F, numero2F) => {
    if (numero1F%numero2F==0) {
        return true;
    }else{
        return false;
    }
}

let cantidadDeDivisores=(numeroF) => {
    for (let index=1;index<=numero;index++){
        if (esMultiplo(numeroF,index)==true){
            cantidad=cantidad+1;
        }
    }
    return cantidad;
}

console.log(`La cantidad de divisores de ${numero} es ${cantidadDeDivisores(numero)}`);