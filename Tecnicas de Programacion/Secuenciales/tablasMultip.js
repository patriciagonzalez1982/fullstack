let readlineSync = require ("readline-sync");
let tabla=readlineSync.questionInt("Ingrese el numero de tabla que desea visualizar: ");
let limite=readlineSync.questionInt("Ingrese el numero hasta el cual desea ver en la tabla: ");
let contador=0;
let resultado;

 if (tabla==0 || limite==0){
    console.log("Ingrese otro numero"); 
 }else {                                               
         while (contador<limite){ 
                contador++
                resultado=tabla*contador;
                console.log(tabla, " x ",contador," = ",resultado);
            }
        }