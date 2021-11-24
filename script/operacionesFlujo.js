// Flujo con operaciones 

const operaciones = (num1,num2) => {
    let preguntaB = true
    if(preguntaB){
        let aplicar = num1 + num2;
        console.log(`numeros operados ${num1} y ${num2}`)
        console.log("resultado suma "+aplicar);
        alert(`El resultado de la suma es ${aplicar}`)
    }
    if(preguntaB){
        let aplicar = num1 - num2;
        console.log(`numeros operados ${num1} y ${num2}`)
         console.log("resultado resta "+ aplicar);
         alert(`El resultado de la resta es ${aplicar}`)
    }
    if(preguntaB){
        let aplicar = num1 * num2;
        console.log(`numeros operados ${num1} y ${num2}`)
         console.log("resultado multiplicacion "+ aplicar);
         alert(`El resultado de la multiplicacion es ${aplicar}`)
    }
    if(preguntaB){
        let aplicar = num1 / num2;
        console.log(`numeros operados ${num1} y ${num2}`)
         console.log("resultado division "+ aplicar);
         alert(`El resultado de la division es ${aplicar}`)
    }
    if(preguntaB){
        let aplicar = num1 % num2;
        console.log(`numeros operados ${num1} y ${num2}`)
         console.log("resultado residuo "+ aplicar);
         alert(`El resultado del residuo es ${aplicar}`)
    }
    
};


let indicacion = alert("Elegirías 2 numeros");
let A = parseInt(prompt("Elige un numero "));
let B = parseInt(prompt("Elige un numero "));
if(A == B || B==A || A < 0 || B < 0){ 
    alert("Los numeros deben ser distintos y mayores a cero");
}else{
    operaciones(A,B);
}

