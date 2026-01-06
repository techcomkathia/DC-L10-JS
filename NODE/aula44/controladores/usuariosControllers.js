//importação dos serviços
const usuariosServices = require('../servicos/usuariosServices');

//normalmente os controladores tem o nome do método http que ele representa
// mostrar todos os usuários getUsuarios, mostrar um usuário getUsuario, criar usuário postUsuario ...

//TODOS OS CONTROLADORES DEVEM SER ASSÍNCRONOS, POIS ELES FAZEM CHAMADAS AOS SERVIÇOS QUE SÃO ASSÍNCRONOS

//recebem como parâmetros a requisição (req) e a resposta (res)
//para serviços que precisam de parâmetros, esses parâmetros virão da requisição (req)
//a maioria dos controladores retornam uma resposta (res) em formato json
async function getUsuarios(req, res) {
    //não necessita de passagem de parâmetros
    const retorno = await usuariosServices.buscarTodosUsuarios()

    if(retorno.erro) {
        //resposta com status de erro
        res.status(400).json(retorno);
    }
    else{
        //resposta com status de sucesso
        res.status(200).json({
            dados: retorno.dados,
            qtdUsuarios: retorno.dados.length,
            mensagem: 'Usuários encontrados com sucesso'
        });
    }
}

//rota com parametro = /usuarios/:id -> o : indica que é um parâmetro necessário
async function getUsuario(req, res){
    //pegar o id do usuário que vem na requisição
    const id = req.params.id;
    const retorno = await usuariosServices.buscarUsuarioPorId(id);

    if(retorno.erro) {
        //resposta com status de erro
        res.status(400).json(retorno);
    }
    else{
        //resposta com status de sucesso
        res.status(200).json(retorno);
    }
}

async function postUsuario(req, res) {
    //Vai fazer as validações necessárias nos dados recebidos executando os serviços apropriados

    //verificar se existe o email já cadastrado no banco de dados
    const {nome, email, senha, confirmarSenha} = req.body;

    const usuarioExistente = await buscarUsuarioPorEmail(email);
    //caso exista, retornar uma mensagem de erro
    if (usuarioExistente.dados) {
        return res.status(400).json({mensagem: 'Email já cadastrado'});
    }
  
    //caso não exista o email, verificar se a senha e a confirmação de senha são iguais
    // if (senha !== confirmarSenha) {
    //     return res.status(400).json({mensagem: 'Senha e confirmação de senha não coincidem'});
    // }

    //essa etapa foi movida para o middleware de validação de usuário (middlewares/validacaoUsuario.js)

    //caso sejam iguais, criar o usuário no banco de dados
    const retorno = await usuariosServices.criarUsuario(nome, email, senha);
    //caso ocorra algum erro, retornar uma mensagem de erro
    if (retorno.erro) {
        return res.status(500).json(retorno);
    }
    //verificar se o usuário foi criado com sucesso
    return res.status(200).json(retorno);
    //caso tenha sido criado com sucesso, retornar os dados do usuário (sem a senha) e uma mensagem de sucesso
    //caso não tenha sido criado, retornar uma mensagem de erro
    
}

module.exports = {getUsuarios, getUsuario, postUsuario};