//EJERCICIOS PARA PRACTICAR LA SECCION 1
/*
Crea tres variables, numero1, numero2 y operador, asignales un valor
Crea una condicion que verifique si el operador es +, -, /, %, o **.
Dependiendo del operador, realiza la operacion correspondiente con los dos numeros e 
imprime el resultado en la consola

Crea una variable llamada dia y asignale un valor de 1 a 7
Crea una condicion que imprima el dia de la semana correspondiente 
al numero que tenga la variable dia

Nota: ambos casos debes de evalaur que hacer en caso de que los valores 
no sean validos
*/

var numero1 = 8;
var numero2 = 9;
var operador = "+";

if (operador === "+"){
  console.log(numero1 + numero2);
}else if(operador === "-"){
  console.log(numero1 - numero2);
}else if(operador === "/"){
  console.log(numero1 / numero2);
}else if(operador === "%"){
  console.log(numero1 % numero2);
}else if(operador === "**"){
  console.log(numero1 ** numero2);
}
else{
  console.log("ERROR")
}
