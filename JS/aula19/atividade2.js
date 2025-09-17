let aluno = {
    nome: 'João',
    notas: [7,10,5]
}

//calcule a média com base na informação armazenada na propriedade notas
//armazene a média na propriedade media
//caso a média seja maior que 7 crie uma propriedade chamada situacao que receberá o texto 'aprovado'
//caso a média seja menor que 7 a propriedade situacao receberá o texto 'reprovado' 

//manipulação de propriedades de objetos
//arrays
//condicionais
aluno.media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3;

console.log(aluno)

if (aluno.media > 7) {
    aluno.situacao = "Aprovado(A)"
}
else{
    aluno.situacao = "Reprovado"
}

console.log(aluno.situacao)