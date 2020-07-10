let readlineSync = require("readline-sync"); 
let precioUnitario = readlineSync.questionFloat("Ingrese precio por unidad: "); 
let cantidadUnidades = readlineSync.questionFloat("Ingrese cantidad de unidades: "); 
let mesCompra = readlineSync.question("Ingrese el mes de la compra: ");
let precioTotal; 
let porcentajeDescuento ; 
let precioFinal;
precioTotal=precioUnitario*cantidadUnidades; 
porcentajeDescuento=precioTotal* 0.15; 
precioFinal=precioTotal-porcentajeDescuento;

if(mesCompra== "octubre") { 
    console.log("La compra tiene descuento del 15% "); 
    console.log("El total de la compra es: "+ precioTotal); 
    console.log("El total a abonar(con descuento aplicado) es: "+ precioFinal); 

}else{ 
    console.log("La compra no tiene descuento");
    
}
    
