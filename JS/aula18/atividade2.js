
//o banco do cleitinho está com uma fila de atendimento
let filaAtendimentos = ['Ana', 'João', 'Maria', 'Claudio']
//os atendimentos prioritários são sempre inseridos no inicio da fila
//os atendimentos normais sempre serao inseridos no final da fila

// Dona Iracema chegou no banco e é uma cliente preferencial
filaAtendimentos.unshift('Dona Iracema')
console.log(filaAtendimentos)
// Marcelo é um cliente normal
filaAtendimentos.push('Marcelo')
console.log(filaAtendimentos)
// Beatriz também é uma cliente normal
filaAtendimentos.push('Beatriz')
console.log(filaAtendimentos)
// Marcondes é um cleinte prioritario
filaAtendimentos.unshift('Marcondes')
console.log(filaAtendimentos)
