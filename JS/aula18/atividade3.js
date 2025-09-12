
//o banco do cleitinho está com uma fila de atendimento
let filaAtendimentos = ['Ana', 'João', 'Maria', 'Claudio']
//os atendimentos prioritários são sempre inseridos no inicio da fila
//os atendimentos normais sempre serao inseridos no final da fila

filaAtendimentos.unshift('Dona Iracema')
console.log(filaAtendimentos)
filaAtendimentos.push('Marcelo')
console.log(filaAtendimentos)
filaAtendimentos.push('Beatriz')
console.log(filaAtendimentos)
filaAtendimentos.unshift('Marcondes')
console.log('A fila antes dos atendimentos:')
console.log(filaAtendimentos)
let qtdSenhas = 5
//o loop será repetido 5x
for(let i=1; i<=qtdSenhas; i++){
    let atendido = ''
    if(i%2!=0){ //removido do início (ímpar)
        atendido = filaAtendimentos.shift() //remove do início da fila
        console.log(atendido)
    }
    else{ //par (removido do final)
        atendido= filaAtendimentos.pop() //remove final da fila
        console.log(atendido)
    }
    //mostra a fila atualizada
    console.log(filaAtendimentos)
}
//o sistema de atendimento do banco liberou 5 senhas. 
//serão atendidos 1 cliente no inicio da fila e 1 do final da fila, respectivamente até completar o total de senhas
//para senhas impares serão atendidos no inicio da fila
//para senhas pares serão atendidos no final da fila
//utilize os metodos shift e pop para isso realizar a remoção de clientes da fila e mostrar no console o nome do cliente atendido
//para realizar o processo de forma eficiente utilize um laço de repetição ( while  ou for)
//para verificar se a senha é par ou impar utilize condicionais if,else e modulo da divisão inteira (%)