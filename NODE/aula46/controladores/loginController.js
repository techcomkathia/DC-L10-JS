const usuariosServices = require('../servicos/usuariosServices');
const bcrypt = require('bcrypt'); //instalar com npm install bcrypt

//importação do jsonwebtoken para geração de tokens
const jwt = require('jsonwebtoken');

async function postLogin(req, res) {

    try{
        //pegar os dados de email e senha da requisição'
        const {email, senha} = req.body;

        //verificar se o email existe no banco de dados
        const retorno = await usuariosServices.buscarUsuarioPorEmail(email);

        if (!retorno.dados){
            return res.status(400).json({mensagem: 'Email não cadastrado'});
        }

        //caso o email exista, comparar a senha recebida com o hash armazenado no banco de dados
        const senhaValida = await bcrypt.compare(senha, retorno.dados.senha); //retorna true ou false
        if (!senhaValida) {
            return res.status(400).json({mensagem: 'email ou senha incorretos'});
        }
        //caso a senha esteja correta, retornar uma mensagem de sucesso 
        // gerar o token de acesso válido por 1 hora

        //construir o payload (conteúdo) do token
        const payload = {
            id: retorno.dados.id,
            nome: retorno.dados.nome,
            email: retorno.dados.email
        };
        //construir o token
        //parametros para o metodo sign: payload, chave privada, objeto de configuração com tempo de expiração
        const token = jwt.sign(payload, 'palavra_super_secreta', {expiresIn: '1h'});
        
        //adicionar o token na resposta
        return res.status(200).json({mensagem: 'Login realizado com sucesso', token: token});

    }
    catch (error) {
        console.error('Erro ao processar login:', error);
        return res.status(500).json({mensagem: 'Erro interno do servidor'});
    }

}


module.exports = {postLogin};