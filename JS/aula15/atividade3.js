//uma loja está em liquidação. O valor de desconto das peças é passado através da cor da etiqueta dos produtos. 
//O atendente deve digitar o valor do produto e a cor da etiqueta e caso a etiqueta esteja na tabela a seguir será computado o desconto e colocado no console. Caso contrario será informado que o produto nao possui desconto e o valor cheio.

// vermelho - 5%
// azul - 10%
// verde - 15%
// preto - 20%

let valor = parseFloat(prompt('Digite o valor do produto: '))
let corEtiqueta = prompt('Digite a cor da etiqueta: ').toLowerCase();

let valorFinal;

switch(corEtiqueta){
//valor etiqueta vermelho com 5% de desconto
    case "vermelho":
        valorFinal = valor - (valor * 0.05);
        console.log("Etiqueta vermelha - Desconto de 5%");
        console.log("Valor do produto com desconto: R$ " + valorFinal.toFixed(2));
        break;
//valor etiqueta azul com 10% de desconto
    case "azul":
        valorFinal = valor - (valor * 0.10);
        console.log("Etiqueta azul - Desconto de 10%");
        console.log("Valor do produto com desconto: R$ " + valorFinal.toFixed(2));
        break;
//valor etiqueta verde com 15% de desconto
    case "verde":
        valorFinal = valor - (valor * 0.15);
        console.log("Etiqueta verde - Desconto de 15%");
        console.log("Valor do produto com desconto: R$ " + valorFinal.toFixed(2));
        break;
//valor etiqueta preto com 20% de desconto
    case "preto":
        valorFinal = valor - (valor * 0.20);
        console.log("Etiqueta preta - Desconto de 20%");
        console.log("Valor do produto com desconto: R$ " + valorFinal.toFixed(2));
        break;

    default:
        console.log("Produto sem desconto. Valor cheio: R$ " + valor.toFixed(2));
}