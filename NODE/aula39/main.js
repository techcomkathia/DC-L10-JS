// importar o recurso do modulo
const operacoesMatematicas = require('./operacoesMatematicas')

const vericarPalindromo = require('./caixinhaFerramentas/verificarPalindromo')
const texto = require('./caixinhaFerramentas/textos')

//importar o módulo FS

//desestruturar o modulo
//menos comum pois pode dar conflito com os nomes das variaveis ou funções definidas dentro deste modulo
//const {somar, subtrair} = operacoesMatematicas

//let x = operacoesMatematicas.somar(10,10)
//console.log(x)
// usar o recurso do modulo vericarPalindromo

//console.log(vericarPalindromo('hannah'))

//texto.mostrarConteudoDoArquivo('./arquivosTexto/meuTexto.txt', 'utf-8')

texto.escreverArquivo('./arquivosTexto/novoArquivoDeTexto.txt', 'Primeira aula de node')


//texto.concatenarArquivo('./arquivosTexto/meuTexto.txt', ' Segunda parte do texto concatenada com o método appendFileSync')

let objeto ={
    "nome": "Notebook",
    "preco": 2500,
    "categoria": "eletrônico"
}


texto.escreverArquivo('./arquivosTexto/objetoJSON.json', JSON.stringify(objeto))

texto.criarPastaComArquiovo('teste', 'arquivoTeste.json', JSON.stringify({
    teste: 'testando',
    objetivo: 'criar uma pasta com um arquivo json dentro'
}))
