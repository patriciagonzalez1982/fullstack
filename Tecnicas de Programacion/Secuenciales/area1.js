let readlineSync = require( 'readline-sync'); 
let base= readlineSync.question('ingrese base: '); 
let altura= readlineSync.question('ingrese alura: '); 
let resultado= base*altura;
console.log("el area es: "+ resultado)