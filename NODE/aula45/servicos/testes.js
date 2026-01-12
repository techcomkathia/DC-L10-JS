const usuariosServices = require('../servicos/usuariosServices');

// usuariosServices.criarUsuario({'nome': 'João', 'email': 'oF4r4@example.com', 'senha': '$2a$12$h1oC67Lk1qnU2Z5r2IHFdOfjYsv4o5X.ZWTrAf3hkTRYX9nu84XKa'});

// usuariosServices.criarUsuario({'nome': 'Maria2', 'email': 'maria2@empresa', 'senha': '123minhasenha'});
usuariosServices.buscarUsuarioPorEmail('maria2@empresa').then(resultado => console.log(resultado))