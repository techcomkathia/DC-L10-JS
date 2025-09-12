
//crie um array com as características de um usuario e um produto.
let nome = 'cleitinho'
let email = 'cleitinho@gmail'
let senha = '123456'
let exemploUsuario = [nome, email, senha]
let usuario = ['cleitinho', 'cleitinho@gmail', '123456']

//para usuário: nome, email, senha
let produto = ['cadeira', 'moveis', 1200.00, 10, true]
//para produto: nome, categoria, preço, quantidade e disponibilidade em estoque (booleano) 

// exiba as informações no console usando o index do array
// nome : cleitinho --> nome: usuario[0]
console.log(`nome: ${exemploUsuario[0]}`)
// email: cleitinho@gmail
console.log('email:' + exemploUsuario[1])
// senha: 123456
console.log(`senha: ${exemploUsuario[2]}`)

