//AUTOS DE CARRERA
let readlineSync = require('readline-sync'); 
let primeraVuelta = readlineSync.questionInt("Ingrese el tiempo de la 1ra. vuelta: ");
let segundaVuelta = readlineSync.questionInt("Ingrese el tiempo de la 2da. vuelta: ");
let terceraVuelta = readlineSync.questionInt("Ingrese el tiempo de la 3ra. vuelta: ");
let cuartaVuelta = readlineSync.questionInt("Ingrese el tiempo de la 4ta. vuelta: ");
let tiempoTotal= primeraVuelta+segundaVuelta+terceraVuelta+cuartaVuelta;
let promedio=tiempoTotal/4;
console.log ("EL TIEMPO TOTAL ES: " + tiempoTotal);
console.log ("EL PROMEDIO DE VUELTA ES: " + promedio);
