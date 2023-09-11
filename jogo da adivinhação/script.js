let result = prompt("advinhe o número que estou pensando, entre 0 a 10.")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber) {
    result = prompt("ERRO, tente novamente:")
    xAttempts++
}

alert(`parabens! voce acertou! O numero que eu pensei foi ${randomNumber} e você precisou de ${xAttempts} tentativas para acertar`)


