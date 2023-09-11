/*
capturar 2 numeros
fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.


E para cada operação, mostrar um alerta com o resultado

*/

let firstNumber = prompt('digite o primeiro numero') //eu tenho a variável fisrtNumber e ela vai receber o prompt "digite o seu número"
let secondNumber = prompt('digite o segundo numero') //eu tenho a variável secondNumber e ela vai receber o prompt "digite o seu número"




firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)


const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('soma: '+ sum)
alert('subtração: ' + sub)
alert('multipicação: ' + mult)
alert('divisão ' +  div)
alert('resto da divisão ' + restDiv)


