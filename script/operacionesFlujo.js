// Flujo con operaciones 

const operaciones = (num1,num2,num3) => {
    let preguntaB = pregunta
    if(preguntaB == 1){
        let aplicar = num1 + num2 + num3;
        console.log(aplicar);
    }
    if(preguntaB == 2){
        let aplicar = num1 - num2 - num3;
         console.log(aplicar);
    }
    if(preguntaB == 3){
        let aplicar = num1 * num2 * num3;
         console.log(aplicar);
    }
    if(preguntaB == 4){
        let aplicar = num1 / num2 / num3;
         console.log(aplicar);
    }
    if(preguntaB == 5){
        let aplicar = num1 % num2 % num3;
         console.log(aplicar);
    }
    
};

let pregunta = parseInt(prompt("Elige una operacion; 1-suma , 2-resta , 3-multiplicacion , 4-division , 5-residuo"));
let indicacion = alert("Elegirías 3 numeros");
let A = parseInt(prompt("Elige un numero "));
let B = parseInt(prompt("Elige un numero "));
let C = parseInt(prompt("Elige un numero "));

operaciones(A,B,C);