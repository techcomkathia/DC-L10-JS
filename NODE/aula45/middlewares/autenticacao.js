// recebe um token e verifica se é válido, caso seja valido, adiciona ele na requisição (para ser usado nas próximas rotas) e chama o próximo middleware ou controlador
// caso não seja válido, retorna uma mensagem de erro de autenticação
const jwt = require('jsonwebtoken');

function autenticarToken(req, res, next) {
    //pegar o token do cabeçalho da requisição
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN => [Bearer, TOKEN]

    //caso não tenha token, retornar erro 401 (não autorizado)
    if (!token) {
        return res.status(401).json({mensagem: 'Token não fornecido'});
    }
    //caso tenha token, verificar se é válido
    //método é o verify do jsonwebtoken
    //recebe como parâmetros: token, chave privada usada na geração do token, callback com erro e payload (conteúdo do token)

    jwt.verify(token, 'palavra_super_secreta', (err, payload) => {
        if (err) {
            return res.status(403).json({mensagem: 'Token inválido ou expirado'});
        }
        //caso seja valido, adicionar o payload (conteúdo do token) na requisição
        req.payload = payload;
        //chamar o próximo middleware ou controlador
        next();
    });
}

module.exports = {autenticarToken};