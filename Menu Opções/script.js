/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. sair
    2. Adicionar exame
    3. Ver exames marcados
  
  --- 


*/


let option 
let exames = []

while (option != 1) {

    option = Number(prompt(`Olá! Escolha a opção desejada:
    1. SAIR
    2. Marcar Exame
    3. Visualizar Exames Agendados

`))
    if(option == 2) {
        let exame = prompt ("qual exame voce deseja agendar?");
        exames.push(exame)
    }

    else if(option == 3){

        if (exames.length == 0) { alert ("sem agendamentos até o momento")}
        else {

        alert (exames);}
    }

        else {
            alert ("tchau");

        }
    }
