//definição da classe mais genérica
//classe mãe ou superclasse
class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou do sexo ${this.sexo}.`)
    }
}

//definição da classe mais específica
//classe filha ou subclasse
class Aluno extends Pessoa{
    // n = nome, i = idade, s = sexo
    constructor(n, i, s, curso, turno, notas=[]){
        //chamando o método construtor da superclasse
        super(n, i, s)
        //atributos específicos da subclasse
        this.curso = curso
        this.turno = turno
        this.notas = notas
    }

    //método específico da subclasse
    adicionarNota(nota){
        this.notas.push(nota)
        console.log(`Nota ${nota} adicionada.`)
    }

    exibirDados(){
        //executa um método da superclasse
        this.apresentar()
        console.log(`Curso: ${this.curso}, Turno: ${this.turno}, Notas: ${this.notas.join(", ")}`)
    }

}

//criando um objeto da classe pessoa
const pessoa1 = new Pessoa("Ana", 30, "Feminino")
const aluno1 = new Aluno("Carlos", 20, "Masculino", "Engenharia", "Matutino") //valor para o array notas é opcional, nesse caso inicia vazio como o parametro não foi passado

pessoa1.apresentar()
aluno1.apresentar() //método herdado da superclasse
//método específico da subclasse
aluno1.adicionarNota(8.5)
aluno1.adicionarNota(9.0)
aluno1.exibirDados() //executa o método apresentar() da superclasse e exibe os dados específicos da subclasse