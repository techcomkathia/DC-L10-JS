// esse módulo tem uma função que verifica se uma palavra é palíndromo
function verificarPalindromo (palavra) {
    return palavra.split('').reverse().join('') === palavra
}


module.exports = verificarPalindromo