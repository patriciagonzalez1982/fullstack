let readlineSync = require("readline-sync"); 
let primerNumero = readlineSync.questionInt("El primer numero es: "); 
let segundoNumero = readlineSync.questionInt("El segundo numero es: "); 
let resultado = primerNumero + segundoNumero; 

console.log("El resultado es: ", resultado); 
