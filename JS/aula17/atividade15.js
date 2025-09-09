/*15) Faça um programa que some todos os números naturais abaixo de 1000 que são
múltiplos de 3 ou 5.*/

let soma =0

for(let i = 1000; i>=0; i--){
    if(i%3==0 || i%5==0){
        soma+=i
        console.log(i)
    }
}

console.log(soma)