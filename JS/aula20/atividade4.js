// funções com parâmetros e com retorno

//para um array de números crie uma função que calcule a soma de todos os elementos ÍMPARES do array passado como parâmetro e retorne esse valor. 

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] //variavel global



//invoque a função passando como parâmetro o array de números acima e mostre o resultado no console
//armazene o resultado retornado pela função em uma variável e mostre essa variável no console

function somarImpares( listaNumeros){
    let soma =0

    for(let i=0; i<= listaNumeros.length; i++){
        if(listaNumeros[i] % 2 == 1){
            soma+=listaNumeros[i] 
        }
    }

    return soma
}

let resultado = somarImpares(numeros)
console.log(resultado)