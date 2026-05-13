let senhaCorreta = "015785";
let senha;
// "!=="- "diferente de (Ele compara dois valores e verifica se eles são diferentes.)"
do {
    senha = prompt("Digite a senha:");

    if (senha !== senhaCorreta) {
        alert("Senha incorreta. Tente novamente.");
    }

} while (senha !== senhaCorreta);

alert("Acesso Permitido");
