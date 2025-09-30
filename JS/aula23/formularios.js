//remoção deo evento padrão do formulário
const senhaCerta = '1234'
const emailCerto = 'kathia@email'

//1)trazer para o js o elemento
const form = document.querySelector('form')
//campos necessários para validação
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const nome = document.querySelector('#nome')

//2)fazer a remoção do evento padrão de submissão do formulário
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    // adicionar as etapas que serão executadas quando o formulário for submetido
    //ex.: validações de campos, envio de dados, etc
    if(email.value !== emailCerto){
        alert('Email incorreto')
        return
    }
    if(senha.value !== senhaCerta){
        alert('Senha incorreta')
        return
    }
    if(!nome.value){
        alert('Digite seu nome')
        return
    }
    //depois das validações, chamar a função de envio de dados
    console.log('enviando os dados')
    console.log(email.value, senha.value, nome.value)
    //depois limpar os campos
    email.value = ''
    senha.value = ''
    nome.value = ''
})




const calcular = document.querySelector('#calcular')
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const resultado = document.querySelector('#resultado')
let soma = 0

//remover o evento padrão do formulário
calcular.addEventListener('submit', (e)=>{
    e.preventDefault()})

//adição do evento de mudança
num1.addEventListener('change', ()=>{
    soma = Number(num1.value) + Number(num1.value)  
    resultado.innerHTML = soma
})
num2.addEventListener('change', ()=>{
    soma = Number(num2.value) + Number(num1.value)
    resultado.innerHTML = soma
})
