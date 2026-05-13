let numeroSecreto = 7;
let contador = 0
let tentativa;
do {
    tentativa = parseInt(prompt("Tente adivinhar o número entre 1 e 10:"));

    contador++;

    if (tentativa !== numeroSecreto) {
        alert("Número errado. Tente novamente.");
    }

} while (tentativa !== numeroSecreto);

alert("Parabéns! Você acertou em " + contador + " tentativas.");