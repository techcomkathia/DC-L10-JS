//as rotas são criadas em arquivos separados do arquivo principal do servidor (app.js ou main.js)
// é uma forma util de organizar o código em projetos maiores
const express = require('express');
const router = express.Router(); //cria uma instância do roteador do express (o app usa o router para definir as rotas e tem outros recursos, mas aqui usamos o router para definir APENAS as rotas)
const validarDadosUsuario = require('../middlewares/validacaoUsuario');
const autenticacao = require('../middlewares/autenticacao');
const usuariosControllers = require('../controladores/usuariosControllers');

//criar as rotas get para os usuários
//raiz das rotas de usuarios teremos os recusos

//dentro das definições de rotas para um determinado recursos sempre teremos os complementos das rotas 
// será como /usuarios/ para obter todos os usuários
// ou /usuarios/:id para obter um usuário específico
//neste arquivo de rotas, não precisamos colocar o /usuarios, pois isso já será feito no arquivo principal do servidor (app.js ou main.js) quando usarmos o router
router.get('/', usuariosControllers.getUsuarios); //rota para obter todos os usuários
router.get('/:id', usuariosControllers.getUsuario); //rota para obter um usuário

router.post('/', validarDadosUsuario, usuariosControllers.postUsuario); //rota para criar um usuário, com middleware de validação de dados

//a rota de exclusão de usuário é uma rota protegida, que só pode ser acessada por usuários autenticados com token válido
router.delete('/:id', autenticacao.autenticarToken, usuariosControllers.deleteUsuario); //rota para excluir um usuário, protegida por autenticação

module.exports = router; //exporta o router para ser usado no arquivo principal do servidor