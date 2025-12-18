// este módulo agrupa todos os middlwares de validação
// ele exporta um objeto com todos os middlwares

//importar o módulo do banco de dados
const bancoDeDados = require('./bancoDados')


//validação de produto
function validarProduto(req, res, next) {
    const produto = req.body
    //caso nenhuma informação seja passada, exibir a mensagem de erro
    if(!produto){
        res.json({
            'mensagem': 'Deve ser informado um produto'
        })
        return

    }
    //caso falte alguma informação, exibir a mensagem de erro
    if(!produto.nome || !produto.preco || !produto.departamento || !produto.quantidade || !produto.estoque){
        res.json({
            'mensagem': 'Todos os atributos devem ser passados. Nome, preco, departamento, quantidade e estoque'
        })
        return
    }

    //caso todas as validações sejam passadas, chamar o next
    next()

}

function validarFuncionario(req, res, next){}

function validarLoja(req, res, next){}

function validarLogin(req, res, next){
    if(!bancoDeDados){
        res.status(500)
        res.json({
            erro: 'servidor fora do ar'
        })
    }

    //verificar se o email e senha foram informados
    if(!req.body.email || !req.body.senha){
        //configurar o status da resposta
        res.status(400)
        res.json({
            'mensagem': 'Todos os atributos devem ser passados. Email e Senha'
        })
        return
    }

    //verificar se o email é cadastrado no banco de dados
    let funcionarios = bancoDeDados.empresa_dados.funcionarios
    let funcionarioEncontrado = funcionarios.find((funcionario)=> funcionario.email == req.body.email)
    if(!funcionarioEncontrado){
        res.status(400)
        res.json({
            'mensagem': 'Email não cadastrado'
        })
        return
    }

    //verificar se a senha corresponde ao cadastrado no banco de dados
    if(funcionarioEncontrado.senha != req.body.senha){
        res.status(400)
        res.json({
            'mensagem': 'Email ou Senha incorretos'
        })
        return
    }

    next()
}

module.exports = {
    validarProduto,
    validarFuncionario,
    validarLoja,
    validarLogin
}