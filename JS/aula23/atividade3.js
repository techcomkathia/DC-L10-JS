// elemento que será manipulado
const ol = document.querySelector('#lista')
//elemento que dispara o evento
const btn = document.querySelector('button')

function adicionarAlista(){
    let item = document.createElement('li')
    item.innerHTML = prompt('Qual a tarefa?')
    ol.appendChild(item)
}

btn.addEventListener('click', adicionarAlista)