function calcularAreaTriangulo (base, altura) {
    return (base*altura)/2;
}

let i;
for (i=1; i<=100;i++)
    
    console.log("Base:",i, "|  Altura:",i*2, "|  El area es:", calcularAreaTriangulo (i,i*2));
