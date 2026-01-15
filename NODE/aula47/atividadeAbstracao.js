// um livro
// cor, tamanho, tipo capa, quantidade de páginas, tipo de encadernação, autor, editora, ano de publicação, tem ilustrações (sim ou não), é edição de colecionador (sim ou não), título

/*
O livro deve conter (atributos):
- Título
- Autor
- Ano de Publicação
- Status (disponível ou emprestado)
*/

class Livro {
    //o atributo status terá um valor padrão "true", caso não seja informado na criação do objeto
    constructor(titulo, autor, anoPublicacao, status= true){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.status = status // true = disponível | false = emprestado
    }

    //mudar o status do livro
    mudarStatus(){
        this.status = !this.status
    }
}

// uma biblioteca
// Criar uma biblioteca (para reunir os livros)    
//      Os objetos do tipo biblioteca contarão com as seguintes funções    
//     - adicionar livros à biblioteca
//     - listar os livros disponíveis.

class Biblioteca {
    //o atributo livros terá um valor padrão vazio, caso não seja informado na criação do objeto
    constructor(livros=[]){
        this.livros = livros
    }

    //adicionar livros à biblioteca
    adicionarLivro(livro){
        this.livros.push(livro)
    }

    //emprestar livro
    emprestarLivro(titulo){
        //procurar o livro pelo título
        //buscar pelo id do livro pelo título
        const livro = this.livros.find((itemLivro) => itemLivro.titulo === titulo)

        if(livro){
            if(livro.status){ //livro.status == true (disponível)
                livro.mudarStatus() //mudar o status do livro para emprestado
                console.log(`Você emprestou o livro: ${livro.titulo}`)
            } else {
                console.log(`Desculpe, o livro: ${livro.titulo} não está disponível no momento.`)
            }       
        }
        else {
            console.log(`O livro: ${titulo} não foi encontrado na biblioteca.`)
        }
    }   
}

/* ----------------------------- usando as classes ---------------------------------- */

let livro1 = new Livro('Dom Casmurro', 'Machado de Assis', 1899)
let livro2 = new Livro('1984', 'George Orwell', 1949)
let livro3 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954)

// let biblioteca = new Biblioteca([livro1, livro2, livro3, {
//     titulo: 'um livro fake',
//     autor: 'autor fake',
//     anoPublicacao: 2024,
//     status: true
// }])

let biblioteca = new Biblioteca([livro1, livro2, livro3, new Livro('um livro fake', 'autor fake', 2024)])

//console.log(biblioteca)

console.log(livro1.autor) //autor é um atrbuto público. Posso acessar diretamente'
livro1.autor= 'Autor modificado após a criação do objeto' //modificando o atributo autor
console.log(livro1)

//ATRIBUTOS PÚBLICOS: podem ser acessados e modificados diretamente fora da classe
//METODOS PÚBLICOS: podem ser chamados diretamente fora da classe
livro1.mudarStatus() //chamando o método público mudarStatus
console.log(livro1)