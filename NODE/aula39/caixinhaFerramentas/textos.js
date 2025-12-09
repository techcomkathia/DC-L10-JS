//escrever em um arquivo
//ler o conteúde de um arquivo
//mostrar o conteúdo de um arquivo
//importar o mudulo FS
const fs = require('fs')

function escreverArquivo(caminho, conteudo){
    fs.writeFileSync(caminho, conteudo)
    console.log('Arquivo escrito com sucesso')
}

function concatenarArquivo(caminho, conteudo){
    fs.appendFileSync(caminho, conteudo)
    console.log('Arquivo escrito com sucesso')
}

function lerArquivo(caminho){
    const conteudo = fs.readFileSync(caminho, 'utf-8')
    console.log(conteudo)
    return conteudo
}

function mostrarConteudoDoArquivo(caminho){
    const conteudo = fs.readFileSync(caminho, 'utf-8')
    console.log(conteudo)
    return conteudo
}

function criarPastaComArquiovo(nomePasta, nomeArquivo, conteudoArquivo){
    //criar a pasta
    fs.mkdirSync(nomePasta)
    //criar o arquivo
    fs.writeFileSync(`./${nomePasta}/${nomeArquivo}`, conteudoArquivo)
    console.log('Arquivo escrito com sucesso')
}

module.exports = {escreverArquivo, lerArquivo, mostrarConteudoDoArquivo, concatenarArquivo, criarPastaComArquiovo}