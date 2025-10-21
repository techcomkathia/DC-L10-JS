function CardUsuario({nome, email, idade}) {
    return (
        <div>
            <h2>Nome: {nome}</h2>
            <p>Email: {email}</p>
            <p>Telefone: {idade}</p>
        </div>
    )
}

export default CardUsuario