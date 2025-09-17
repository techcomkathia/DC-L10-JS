//crie um objeto com as informações passadas pelo usuario
//nome, idade, curso, turno, nota1, nota2, nota3
//nota1, nota2 e nota3 devem ser armazenadas em um array, na propriedade notas
//calcule a média com base na informação armazenada na propriedade notas
//ao final do objeto, converta ele para json e exiba o json no console
//converta o json para objeto e exiba a informação no console mostrando o nome do aluno e a sua média

let nome = prompt("Nome: ");
let idade = Number(prompt("Idade: "));
let curso = prompt("Curso: ");
let turno = prompt("Turno: ");
let nota1 = Number(prompt("Nota 1: "));
let nota2 = Number(prompt("Nota 2: "));
let nota3 = Number(prompt("Nota 3: "));

let aluno = {
    nome: nome,
    idade: idade,
    curso: curso,
    turno: turno,
    notas: [nota1, nota2, nota3],
};

aluno.media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3;

let jsonAluno = JSON.stringify(aluno);

console.log(jsonAluno);
let alunoParse = JSON.parse(jsonAluno);
console.log(alunoParse.nome);
console.log(alunoParse.media);