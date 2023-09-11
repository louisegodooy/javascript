let estudantes = [
    {nome: "Dudu", nota1: 8, nota2: 8 },
    {nome:"Lua", nota1: 7, nota2: 5 },
    {nome: "Maggie", nota1: 7, nota2: 7},
]

function calcMedia(nota1 , nota2) {
    let media = (nota1 + nota2) / 2;
    return media;
}

for(estudante of estudantes){
 let mediaIndividual = calcMedia(estudante.nota1, estudante.nota2);
 let passouReprovou = mediaIndividual < 7 ?
 "Infelizmente você não passou" : "Parabéns!! Você passou!"

 alert(`Olá ${estudante.nome}, sua média foi: ${mediaIndividual}, ${passouReprovou}`)

    }
