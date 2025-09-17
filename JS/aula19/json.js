let meuObjeto ={
    codigo: 1,
    nome: 'cadeira',
    preco: 1200.00,
    quantidade: 30,
    disponibilidade: true,
    exibirPreço : function(){
        alert('preço: ' + meuObjeto.preco)
    }
}

console.log(meuObjeto)
console.log(typeof(meuObjeto)) 

let texto  = JSON.stringify(meuObjeto)
console.log(texto)
console.log(typeof(texto))

let endereco = {
  "cep": "60025-060",
  "logradouro": "Rua Barão do Rio Branco",
  "complemento": "até 1878/1879",
  "unidade": "",
  "bairro": "Centro",
  "localidade": "Fortaleza",
  "uf": "CE",
  "estado": "Ceará",
  "regiao": "Nordeste",
  "ibge": "2304400",
  "gia": "",
  "ddd": "85",
  "siafi": "1389"
}

let enderecoJson = JSON.stringify(endereco)
console.log(enderecoJson)
console.log(typeof(enderecoJson))

let enderecoObj = JSON.parse(enderecoJson)
console.log(enderecoObj)
console.log(typeof(enderecoObj))