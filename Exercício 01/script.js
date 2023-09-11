let numberOne = Number(prompt("Digite o primeiro número"));
let numberTwo = Number(prompt("Digite o segundo número "));


  
  
const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const div = numberOne / numberTwo;
const mult = numberOne * numberTwo;
const restDiv = numberOne % numberTwo;



if (sum % 2 === 0) {
    alert("A soma dos números é par.");
}
else {
   alert(" A soma dos números é impar");
}



if (numberOne == numberTwo) {
    alert(`O primeiro número digitado é igual ao segundo número digitado. 
    Primeiro número: ${numberOne} e o
    Segundo número: ${numberTwo}.`);
}
else {
   alert(`O primeiro número digitado é diferente do segundo número digitado. 
    Primeiro número: ${numberOne} e o
    Segundo número: ${numberTwo}.`);
}

alert ("Soma: " + sum);
alert ("Subtração: " + sub);
alert ("Divisão: " + div);
alert ("Multiplicação: " + mult);
alert ("Resto da Divisão: " + restDiv);








