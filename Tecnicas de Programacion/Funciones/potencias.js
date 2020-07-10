let readlineSync=require("readline-sync");
let base=readlineSync.questionInt("Ingrese base: ");
let exponente=readlineSync.questionInt("Ingrese exponente: ");

let calcularPotencia=(baseF,exponenteF) => {
    if (exponenteF>=0) {
        if (exponenteF==0){
            console.log ("Todo numero elevado a 0 da como resultado: 1");
            return
        }else{
            return baseF**exponenteF;
            }
        
    }else{console.log ("No se admiten exponentes menores que 0");
    return
    }
}

console.log ("El resultado es: ", calcularPotencia (base, exponente));