//diaSemanaAño

let dias =parseInt(prompt("cuantos dias" ));
let año=365
let semana=7
let resultado=dias/año
let resultadob=dias/semana
let horas = dias*24

document.write("la cantidad de años son  "+Math.floor(resultado)+"<br>");
document.write("la cantidad de semanas son "+Math.floor(resultadob)+"<br>");
document.write("La cantidad de dias son "+ dias+"<br>");
document.write("la cantidad horas son "+Math.floor(horas)+"<br>");