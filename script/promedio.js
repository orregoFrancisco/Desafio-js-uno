//Promedio 5 numeros
alert("A Continuación elegirías 5 numeros de los cuales se dara el promedio")
let pedir = parseInt(prompt("digite un numero 1"))
let pedirA = parseInt(prompt("digite un numero 2"))
let pedirB = parseInt(prompt("digite un numero 3"))
let pedirC = parseInt(prompt("digite un numero 4"))
let pedirD = parseInt(prompt("digite un numero 5"))

let resultadoSuma = pedir+pedirA+pedirB+pedirC+pedirD;
document.write("La suma de tus numeros es " +resultadoSuma+"<br>");
let resultadoPromedio = (pedir+pedirA+pedirB+pedirC+pedirD) / 5;
document.write("El promedio de tus numeros es  "+resultadoPromedio);