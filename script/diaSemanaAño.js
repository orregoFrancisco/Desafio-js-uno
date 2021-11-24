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
document.write("la cantidad horas son "+Math.floor(horas)+"<br><br><br><br>");



let diasB =parseInt(prompt("cuantos dias" ));
if(dias < 365){
    let operacionSemana = diasB/7;
    document.write("la semana /"+Math.floor(operacionSemana)+"<br>")
    let operacionDias = diasB % 7;
    document.write("el dia /"+Math.floor(operacionDias)+"<br><br>")
}else{
    let operacionSemana =(diasB - 365) / 7;
    document.write("la semana /"+Math.floor(operacionSemana)+"<br>")
    let operacionDias = (diasB - 365) - 7;
    document.write("el dia /"+Math.floor(operacionDias)+"<br><br>")
}

let años = 365
if(dias < 365){
    operacionAño = 0;
    document.write("el año /"+Math.floor(operacionAño)+"<br>")
}else{
    let operacionAño = años%diasB
    document.write("el año /"+Math.floor(operacionAño)+"<br>")
}







