// café na cafeteira ou no filtro
//só existem 2 opções:
//cafeteira
//filtro
let escolha = 'cafeteira'
if(escolha == 'cafeteira'){ //false
    console.log('Foi escolhida a opção de cafeteira')
    //todo o processamento para a opção de cafeteira será executado
}
else{
    console.log('Foi escolhida a opção de filtro')
    //todo o processamento para a opção de filtro sera executado
}


//bloco if/else if/ else

let numero = 1
//serão possíveis 3 opções de números

//1ª opção numero=1
//2ª opção numero=2
//3ª opção numero=3
// exceção numero diferente das opções anteriores

if(numero == 1){ //true
    console.log('Foi escolhido o numero 1')
}
else if(numero == 2){ // false
    console.log('Foi escolhido o numero 2')
}
else if(numero == 3){ //false
    console.log('Foi escolhido o numero 3')
}
else{
    console.log('Foi escolhido um número diferente de 1, 2 ou 3')
}

let painhoMilionario = true

if(painhoMilionario){
    console.log('Viver a vida de milionario')
}
