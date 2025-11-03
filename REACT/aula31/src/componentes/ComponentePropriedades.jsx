function ComponentePropriedades(props) {
    return (
        <div>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
        </div>
    )
}

function ComponentePropriedades2({nome, idade}) {
    return (
        <div>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
        </div>
    )
}

export default ComponentePropriedades