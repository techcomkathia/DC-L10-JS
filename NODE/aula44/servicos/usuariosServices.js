const usuarioModel = require('../modelo/UsuariosModel');

//importação do modelo que será manipulado pelos serviços

//operações de CRUD (Create, Read, Update, Delete) para usuários
// métodos do sequelize para manipular o banco de dados correspondentes aos comandos SQL
/*
create - cria um novo registro (INSERT)
findAll - recupera todos os registros (SELECT *)
findByPk - recupera um registro pelo seu ID (SELECT ... WHERE id = ...)
update - atualiza um registro existente (UPDATE ... SET ... WHERE id = ...)
destroy - exclui um registro (DELETE FROM ... WHERE id = ...)
*/

// TODAS AS FUNÇÕES EXECUTADAS NO MODELO SÃO ASSÍNCRONAS

// Criar um novo usuário - deverá receber um objeto com os dados do usuário
    //retornar um objeto com os dados do usuário criado ou uma mensagem de erro
async function criarUsuario(dadosUsuario) {
    try{
        const novoUsuario = await usuarioModel.create(dadosUsuario);
        //se sucesso na criação, retorna o objeto do novo usuário
        const usuarioCriado = novoUsuario.dataValues; //apenas os dados que queremos expor do novo usuário em seu atributo dataValues
       return {dados: {
            
            //apenas os dados que queremos expor
            id: usuarioCriado.id,
            nome: usuarioCriado.nome,
            email: usuarioCriado.email
            //a senha não deve ser retornada por questões de segurança
        }, mensagem: 'Usuário criado com sucesso'};

    }
    catch (error) {
        //em caso de erro, retorna uma mensagem de erro
        return {mensagem: 'Erro ao criar usuário', erro: error.message};
    }
}
//buscar um usuário pelo ID - deverá receber o ID do usuário como parâmetro 
    //retornar um objeto com os dados do usuário ou uma mensagem de erro

async function buscarUsuarioPorId(id) {
    try {
        const usuarioEncontrado = await usuarioModel.findByPk(id);        

        //verifica se o usuário foi encontrado
        if (usuarioEncontrado) {
            const usuario = usuarioEncontrado.dataValues;
            return {dados: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            }}
        } else {
            return {mensagem: 'Usuário não encontrado'};
        }

    }
    catch (error) {
        //caso ocorra um erro (com objeto de erro) na busca
        return {mensagem: 'Erro ao buscar usuário', erro: error.message};
    }
}

//buscar todos os usuários - não recebe parâmetros
    //retornar um objeto com os dados do usuário ou uma mensagem de erro
async function buscarTodosUsuarios() {
    try {
        const usuariosEncontrados = await usuarioModel.findAll();
        const listaUsuarios = usuariosEncontrados.map(usuario => {
            const u = usuario.dataValues;
            return {
                id: u.id,
                nome: u.nome,
                email: u.email
            }
        });
        return {dados: listaUsuarios};
    }
    catch (error) {
        return {mensagem: 'Erro ao buscar usuários', erro: error.message};
    }
}

//uma função que busca um usuario pelo email - deverá receber o email como parâmetro
    //retornar um objeto com os dados do usuário ou uma mensagem de erro
async function buscarUsuarioPorEmail(email) {
    try {
        //o método findOne busca o primeiro registro que corresponde à condição especificada no atributo where.
        const usuarioEncontrado = await usuarioModel.findOne({
            where: {email: email}
        });
        if (usuarioEncontrado) {
            const usuario = usuarioEncontrado.dataValues;
            return {dados: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            }}
        } else {
            return undefined ;
        }
    }
    catch (error) {
        return {mensagem: 'Erro ao buscar usuário', erro: error.message};
    }
}

//atualizar um usuário - deverá receber o ID do usuário e um objeto com os dados atualizados
    //retornar um objeto com os dados do usuário atualizado ou uma mensagem de erro

async function atualizarUsuario(id, dadosAtualizados) {
    try {
        const [linhasAtualizadas] = await usuarioModel.update(dadosAtualizados, {
            where: {id: id}
        });         
        if (linhasAtualizadas > 0) {
            return {mensagem: 'Usuário atualizado com sucesso'};
        }
        else {
            return {mensagem: 'Usuário não encontrado'};
        }
    }
    catch (error) {
        return {mensagem: 'Erro ao atualizar usuário', erro: error.message};
    }
}

//excluir um usuário - deverá receber o ID do usuário
    //retornar uma mensagem de sucesso ou de erro

async function excluirUsuario(id) {
    try {
        const linhasExcluidas = await usuarioModel.destroy({   
            where: {id: id}
        });         
        if (linhasExcluidas > 0) {
            return {mensagem: 'Usuário excluído com sucesso'};
        }
        else {
            return {mensagem: 'Usuário não encontrado'};
        }
    }
    catch (error) {
        return {mensagem: 'Erro ao excluir usuário', erro: error.message};
    }       
        } 

module.exports = {
    criarUsuario,
    buscarUsuarioPorId,
    buscarTodosUsuarios,
    buscarUsuarioPorEmail,
    atualizarUsuario,
    excluirUsuario
}