let numero1 = Number(prompt("Digite um número:"));

// Verifica se é divisível por 2 e 5 ao mesmo tempo
if (numero1 % 2 === 0 && numero1 % 5 === 0) {
    alert(numero1 + " é divisível por 2 e 5 ao mesmo tempo.");
} 
// Caso contrário, verifica se é divisível por 2
else if (numero1 % 2 === 0) {
    alert(numero1 + " é divisível apenas por 2.");
} 
// Caso contrário, verifica se é divisível por 5
else if (numero1 % 5 === 0) {
    alert(numero1 + " é divisível apenas por 5.");
} 
// Caso nenhum dos testes anteriores seja verdadeiro
else {
    alert("Erro! O número informado foi: " + numero1);
}


let numero2 = Number(prompt("Digite outro número:"));

// Verifica se é divisível por 2 ou por 3
if (numero2 % 2 === 0 || numero2 % 3 === 0) {
    alert(numero2 + " é divisível por 2 ou por 3.");
} 
// Caso contrário, exibe o número digitado
else {
    alert("Erro! O número informado foi: " + numero2);
}
