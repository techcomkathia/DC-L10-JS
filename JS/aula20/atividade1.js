// crie uma função que peça 3 numeros ao usuário e mostre o maior deles 
// utilize o prompt para receber os dados do usuário
// todos os dados devem ser armazenados em variáveis locais (dentro da função)

function numeros() {
    let n1 = Number(prompt("Digite um número: "))
    let n2 = Number(prompt("Digite o segundo número: "))
    let n3 = Number(prompt("Digite o terceiro número: "))

    let maiorNumero = Math.max(n1, n2, n3)

    console.log(maiorNumero)
}

numeros()