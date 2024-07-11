const n1 = parseInt(prompt("Ingrese un número"));
if (n1%2 === 0) {
    document.write(n1 + " es divisible por 2");
} else {
    if (n1%3 === 0) {
    document.write(n1 + " es divisible por 3");   
    } else {
        if (n1%5 === 0 ){
        document.write(n1 + " es divisible por 5"); 
        } else {
            if (n1%7 === 0){
                document.write(n1 + " es divisible por 7"); 
            }
        }
    }

}