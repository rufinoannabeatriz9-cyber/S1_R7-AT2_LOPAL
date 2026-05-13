let soma = 0;
let resposta;
let numero;

do {
    numero = parseInt(prompt("Digite um número inteiro:"));
    soma = soma + numero;
    resposta = prompt("Deseja inserir outro número? (s/n)");

} while (resposta === "s");

alert("A soma total é: " + soma);