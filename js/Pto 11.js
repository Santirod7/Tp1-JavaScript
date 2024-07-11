const n1 = parseInt(prompt("Ingrese un número"));
let divisible2
let divisible3
let divisible5
let divisible7 
if (n1%2 === 0) {
    divisible2 = 2
}  else {
    divisible2 = " "
} //No se como se hace
if (n1%3 === 0) {
    divisible3 = 3
    } else {
    divisible3 = " "
    }
 if (n1%5 === 0 ){
        divisible5 = 5
 } else {
    divisible5 = " "
 }
 if (n1%7 === 0){
    divisible7 = 7
} else {
    divisible7 = " "
}
if (divisible2 === 2 || divisible3 === 3  || divisible5 === 5 || divisible7 === 7 ){
    document.write (n1 + " es divisible por: " + divisible2 + "," + divisible3 + "," + divisible5 + "," + divisible7)
}
