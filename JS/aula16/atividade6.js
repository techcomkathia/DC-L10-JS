/*Escreva um programa que receba como entrada o valor do saque realizado pelo cliente
de um banco e retorne quantas notas de cada valor serão necessárias para atender ao
saque com a menor quantidade de notas possível. Serão utilizadas notas de 100, 50, 20,
10, 5, 2 e 1 real.*/

let qtd100 = 0
let qtd50 = 0
let qtd20= 0
let qtd10= 0
let qtd5 = 0
let qtd2 = 0
let qtd1 = 0

// 72
// 0 notas de 100 -> valor a ser sacado é menor que 100
// 1 nota 50 -> faltando 22 para completar o valor do saque
// 2 nota 20 -> faltando 2 reais para completar o valor
// 0 notas de 10 -> valor a ser sacado é menor que 10
// 0 notas de 5 -> valor a ser sacado é menor que 5
// 1 notas de 2 -> falta 0 reais para completar o saque

//dica use o loop while e dentro do corpo dele estabeleça as condições para avaliar a nota que será incluida no saque
// a cada nota adicionada, o valor do saque deverá ser diminuido pela nota adicionada