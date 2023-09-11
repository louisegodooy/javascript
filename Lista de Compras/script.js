/*

Capture 10 itens para compor a lista de um supermercado

após capturas os 10 itens, imprima-os, separando por vírgula*/


let items = []; //declarando uma variável, onde recebe uma lista vazia

for (let item = 0; item < 10; item++) // vai ser um loop com o item++ até chegar na posição 10.
{
  let itemName = prompt("digite o item" + (item +1)) // vai solicitar ao usuário que digite um nome de item usando o prompt
                                                     // o numero do item é concatenado com a string"digite o item" para fornecer uma mensagem personalizada para cada interção

  items[item]= itemName // o valor digitado pelo usuário é armazenado na variavel itemName, usando o let.
                        //A cada interação, o valor itemName é adicionado ao array 'items', usando a notação de colchete[item]
                        // onde vai sempre guardar o dado em uma próxima posição no array, pois o item sempre adiciona mais um número a casa interação (item++)
}


alert(items) //Após o término do loop, um alerta é exibido no navegador com o conteúdo do array 'items', que agora contém os itens digitados pelo usuário,