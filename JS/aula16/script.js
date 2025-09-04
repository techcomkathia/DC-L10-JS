/*let condicao = true

while(condicao){

    let num = prompt('Digite um número')
    console.log(num)
    condicao = confirm('Deseja continuar?')

}*/

//contagem de 1 até 50
let num = 1 //primeiro valor da contagem
let valorFinal = 50 //ultimo valor da contagem

/*while(num <= valorFinal){
    //executar a atividade que será repetida durante o loop enquanto a condição for atendida (true)
    console.log( num)
    //atualizar a condição, para que o loop seja finito
    num += 1
}*/

let numMisterioso = 30
let numUser = prompt('Digite um número para adivinhar o número misterioso')
//peça ao usuário para adivinhar o número misterioso. O loop vai ser repetido até ele acertar

while(numUser != numMisterioso){
    //informar que errou, com um alert.
    alert('Você errou. Digite novamente outro número')
    //atualizar a condição para interrupção do laço
    numUser = prompt('Digite um novo palpite para o número misterioso')
}

alert('Você acertou. Saiu do loop while')


console.log( 'saiu do laço ')

