const http = require('http')

//criação do servidor 
//método createServer recebe uma função callback que recebe dois parâmetros requisição e resposta 

const meuServidor = http.createServer((req, res) => {
    //configuração do cabeçalho
    res.writeHead(200, {'Content-Type': 'application/json'})
    //método writeHead recebe dois parâmetros: statusCode e cabeçalho
    //responder com uma mensagem

    //especialização das rotas
    // método padrão get para rota principal
    if(req.url === '/'){
        res.end(JSON.stringify({
            'mensagem': 'Bem vindo ao meu servidor',
            'versao': '1.0.0',
            'aplicacao': 'Teste módulo HTTP do Node.js',
            'data': '2022-05-19'
        }))
    }
    /*else if (req.url ==='/cleitinho'){
        //responder com um objeto para o método get na rota cleitinho
        res.end(JSON.stringify({
            'tipo': 'gato',
            'nome': 'Cleitinho',
            'idade': 2,
            'cor': 'laranja'
        }))
    }*/

    else if(req.url ==='/cleitinho' && req.method === 'POST'){
        //captar o corpo da requisição e mostrar no console 
        //devolver a resposta contendo o texto que foi enviado
        let body = ''
        let dadosRecebidos= {}

        //capta o conteúdo do corpo da requisição e armazena na variável dados
        req.on('data', conteudoDados => {
            body += conteudoDados.toString();
            console.log(body);
        });

        //quando o corpo da requisição terminar de ser captado
        //será executado o codigo abaixo onde será armazenado o corpo da requisição e montado um objeto para a resposta
        req.on('end', () => {
            dadosRecebidos = JSON.parse(body);
            //converter o corpo da requisição para um objeto
            console.log(dadosRecebidos);
            //mostrar no console

            //devolvida a resposta com os dados necessários
            res.end(JSON.stringify({
                'tipo': 'gato',
                'nome': 'Cleitinho',
                'idade': 2,
                'cor': 'laranja',
                //informação enviada pelo corpo da requisição
                'dadosEnviados': dadosRecebidos
            }))
        });
        
    }
    else if(req.url ==='/zdfsfasfsdfafdf' && req.method === 'GET'){
        res.end(JSON.stringify({
           'mensagem': 'Essa rota agora existe'
        }))
    }

    else{
        res.end(JSON.stringify({
            'mensagem': 'Rota inexistente'
        }))
    }
})

//executar o servidor em uma porta
//método listen recebe dois parâmetros, número da porta e uma função callback que pode mostrar uma mensagem no console
meuServidor.listen(3000, () => console.log('servidor rodando na porta 3000'))
//todas as vezes que existir uma alteração no código o servidor deverá ser reiniciado (ctrl + c no terminal para matar o processo e executar novamente o comando npm start)