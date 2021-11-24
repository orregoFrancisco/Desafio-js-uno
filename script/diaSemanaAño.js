//diaSemanaAño



let dias =parseInt(prompt("cuantos dias" ));
let años = 365
let semana = 7
let operacionAño = años%dias
document.write("el año /"+Math.floor(operacionAño)+"<br>")
let operacionSemana = dias / 52;
document.write("la semana /"+Math.floor(operacionSemana)+"<br>")
let operacionDias = dias /años;
document.write("el dia /"+Math.floor(operacionDias)+"<br><br>")




