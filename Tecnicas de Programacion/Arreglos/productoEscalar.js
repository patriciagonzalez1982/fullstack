let readlineSync=require("readline-sync"); 
let largoArreglo=readlineSync.questionInt("Ingrese un numero para definir dimension del arreglo "); 
let primerArreglo=[]; 
let segundoArreglo=[]; 

let cargarArreglos=(arreglo,longitud) =>{ 
     
       for(let i=0;i<longitud;i++){ 
           let numeros= Math.floor(Math.random()*10);
           arreglo[i] = numeros;
     
        } return arreglo ;  
           
    } 

let calcularProducto=(arreglo1,arreglo2)=>{ 
    let producto=0; 
    let resultado=0;  
   for(let i=0;i<arreglo1.length;i++){  
     producto=arreglo1[i]*arreglo2[i]; 
     resultado=resultado+producto; 

   } return resultado
} 


cargarArreglos(primerArreglo,largoArreglo) 
cargarArreglos(segundoArreglo,largoArreglo) 
console.log(primerArreglo,segundoArreglo)
  
console.log(calcularProducto(primerArreglo,segundoArreglo))