let readlineSync=require("readline-sync"); 
 
let contador; 
let resultado; 
for( contador=1; contador<=6; contador++ ^ 6){ 
  let  cantidadDados= readlineSync.questionInt("Ingrese el numero de dados a tirar: "); 
     resultado=cantidadDados*contador^6; 

}