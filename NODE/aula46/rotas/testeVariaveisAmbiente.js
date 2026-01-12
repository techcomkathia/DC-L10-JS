//com o módulo dotenv conseguimos carregar variáveis de ambiente a partir de um arquivo .env que fica na raiz do projeto
require('dotenv').config({path: '../.env'})
//o método config() lê o arquivo .env e carrega as variáveis de ambiente para o processo do Node.js
//poderá ser necessário informar o caminho do arquivo .env nesse caso deve ser passado um objeto com a propriedade path

console.log(`variável de ambiente porta de teste : ${process.env.PORT_TESTE}`)