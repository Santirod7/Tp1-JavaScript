const n1 = parseInt(prompt("Ingrese primer numero"));
const n2 = parseInt(prompt("Ingrese segundo numero"));
const n3 = parseInt(prompt("Ingrese tercer numero"));

if (n1>n2){
    if (n1>n3){
        document.write("El primer numero, es decir " + n1 + ", es mayor")   
    } else {
        document.write("El tercer numero, es decir " + n3 + ", es mayor")
    } 
} else {
    if (n2>n3){
        document.write("El segundo numero, es decir " + n2 + ", es mayor")
    } else {
        document.write("El tercer numero, es decir " + n3 + ", es mayor")
    }
}