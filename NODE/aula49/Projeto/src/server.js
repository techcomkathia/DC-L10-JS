

const app = require('./app');
const { sequelize } = require('./database/index');

const PORT = process.env.PORT || 3000;

(async () => {
	try {
		await sequelize.authenticate();
		console.log('Conexão com o banco de dados estabelecida com sucesso.');
		app.listen(PORT, () => {
			console.log(`Servidor rodando na porta ${PORT}`);
		});
	} catch (err) {
		console.error('Erro ao conectar com o banco de dados:', err);
	}
})();

