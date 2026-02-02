//o middleware de validação de usuário pode ser usado para validar os dados recebidos nas requisições antes de serem processados pelos controladores
//normalmente, esse middleware é usado nas rotas de criação e atualização de usuários
//tem como objetivo garantir que os dados recebidos estejam corretos e completos antes de serem processados
//verifica se os campos obrigatórios estão presentes e se os dados estão no formato correto
//se os dados estiverem corretos, o middleware chama a função next() para passar o controle para o próximo middleware ou controlador


//para criar um usuario precisamos ter nome, email, senha e confirmarSenha

//o middleware recebe como parâmetros a requisição (req), a resposta (res) e a próxima função (next)
async function validarDadosUsuario(req, res, next) {
    const { nome, email, senha, confirmarSenha } = req.body;

    //verificar se os campos obrigatórios estão presentes
    if (!nome || !email || !senha || !confirmarSenha) {
        return res.status(400).json({ mensagem: 'Todos os campos (nome, email, senha, confirmarSenha) são obrigatórios' });
    }

    //verificar se a senha e a confirmação de senha são iguais
    if (senha !== confirmarSenha) {
        return res.status(400).json({ mensagem: 'Senha e confirmação de senha não coincidem' });
    }

    //se os dados estiverem corretos, o middleware chama a função next() para passar o controle para o próximo middleware ou controlador
    next();
}

module.exports = validarDadosUsuario