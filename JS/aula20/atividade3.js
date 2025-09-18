// monte uma calculadora com as 4 funções básicas.
//Para realizar esse desafio você deverá criar 5 funções com parâmetros
// 4 funções para as operações básicas ( soma, subtração, divisão e multiplicação) que deverão receber 2 parâmetros 
//1 função para executar a operção correta (função calculadora) que deverá receber 3 parâmetros, 2 números e um símbolo.
//De acordo com o símbolo a função de operção matemática será executada recebendo os 2 números. 

function somar(n1,n2){
  console.log(n1 + n2)
  return ('n1+sou o retorno da função somar')
  alert('Fui invocado depois do retorno da função somar')
}

function subtrair(n1,n2){
  console.log(n1 - n2)
}

function dividir(n1,n2){
  if(n2==0){
    console.log('Impossível dividir por 0')
  }
  else{
    console.log(n1/n2)
  }
}

function multiplicar(n1,n2){
  console.log(n1 * n2)
}

function calculadora(n1,n2,simbolo){

    switch (simbolo) {
        case '+':
            somar(n1,n2)            
            break;
        case '-':
            subtrair(n1,n2)            
            break;
        case '/':
            dividir(n1,n2)            
            break;
        case '*':
            multiplicar(n1,n2)            
            break;
    
        default:
            console.log('Símbolo não suportado. Operação inválida')
            break;
    }

}

calculadora(2,3,'+') //soma 2 e 3
calculadora(2,3,'*') //multiplica 2  por 3
calculadora(2,3,'k')
calculadora(2,0,'/')

let x = somar(2,2)