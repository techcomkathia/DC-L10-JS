let numeros = [10, 20, 30] //60

let soma = numeros.reduce(
    (total,itemArray)=>{
    //console.log(itemArray)
    return total+= itemArray
},
1000
)

//array original
let vendasMes2025 =[ 1,2,3,4,5,6,7,8,9,10,11,12]
//valor anterior que vai ser somado ao total
let anosAnteriores = 1000

//total APENAS de 2025 ( redução do array original)
let totalFaturdado2025 = vendasMes2025.reduce((somaVendas, vendaMes)=> somaVendas+= vendaMes)

let totalFaturado3anos = vendasMes2025.reduce((somaVendas, vendaMes)=> somaVendas+= vendaMes, anosAnteriores )