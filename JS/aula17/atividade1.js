//Faça um programa que leia a nota de N alunos, em seguida exiba a média das notas
let qtdNotas = Number(prompt('Digite a quantidade de notas a serem lidas para cálculo da média:'))
let somaNotas = 0 //acumulador

for(let i = 1; i<= qtdNotas; i++){
    somaNotas+= Number(prompt(`Digite a nota ${i}`))
}

let media = somaNotas/qtdNotas
console.log(`A média para as ${qtdNotas} lidas foi de : ${media.toFixed(2)}`)