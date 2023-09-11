/* solicitar o nome do aluno e as 3 notas 
do bimestre e calcular a média daquele aluno


Se o aluno passou de ano, dar os parabens 


Se o aluno não passou, motivar o aluno a dar seu melhora 
na prova de recuperação


Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota*/



let estudante = prompt('qual o nome do aluno(a)?');
let n1 = prompt('qual a nota da primeira prova?');
let n2 = prompt('qual a nota da segunda prova?');
let n3 = prompt('qual a nota da terceira prova?');


//fazer a média


let media = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = media > 6

if (result) {

    alert(estudante + ' , parabens você passou. Sua média foi: ' + media.toFixed(2))
}


else {
    alert(estudante + ', estude para sua prova de recuperação, sua média foi de: ' + media.toFixed(2))
}
