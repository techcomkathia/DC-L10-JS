// métodos para selecionar os elementos do DOM
// seletor de tag => selecionar todos os elementos da tag passada, retornando um htmlcollection (array de elementos)

const titulosH1 = document.getElementsByTagName('h1')
console.log(titulosH1)
console.log(titulosH1[0])
console.log(titulosH1[0].innerHTML)

//alterar o texto (conteúdo) da tag
// titulosH1[0].innerHTML = 'Ola Mundo'

// seletor de class => selecionar todos os elementos com a class passada, retornando um htmlcollection (array de elementos)

const itens = document.getElementsByClassName('minhaClasse')
// console.log(itens)

// seletor de id => selecionar o elemento com o id passado, retornando um htmlcollection (array de elementos)

const unico = document.getElementById('unico')  
// console.log(unico)

const minhaDiv = document.getElementById('minhaDiv')
console.log(minhaDiv.innerHTML)

minhaDiv.innerHTML = '<h3>Novo texto<h3>'


minhaDiv.innerHTML += '<p>Novo texto 2</p>'