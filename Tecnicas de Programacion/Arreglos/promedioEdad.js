let obtenerPromedio=(arreglo, longitudArreglo, minimo, maximo) =>{ 
        let suma=0; 
    for(let i=0; i < longitudArreglo; i++){ 
        console.log(i)
        arreglo[i]= Math.round(Math.random()*(minimo-maximo));
        suma+=arreglo[i];
        console.log(suma,arreglo[i])
    }
return arreglo, suma/longitudArreglo;
}

let edades=[]
console.log(obtenerPromedio(edades,10,3,7));