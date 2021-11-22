// grados Celsius transformasion a grados Kelvin y Fahrenheit

let grados=parseInt(prompt("ingresa los grados Celsius , para transformar a Kelvin"));

let combertir=grados+273.15; 

document.write("Kelvin: "+combertir+"<br>");

let faren = parseInt(prompt("ingresa los grados Celsius , para transformar a Fahrenheit"));

let combertirFaren = (faren * 9/5)+32;

document.write("Fahrenheit: "+combertirFaren);