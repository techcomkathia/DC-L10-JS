function ComponenteRenderizacaoLista({listaDeElementos=[]}) {
    //se a lista de elementos não for passada como propriedade, ele cria uma lista vazia. Revisar valor padrão para parâmetros de funções
    return (
        <>
        <h1>Renderizados por lista</h1>
        <p>Este compnente recebe uma lista de elementos como propriedade e através do metodo map renderiza-os</p>

        <ul>
            {listaDeElementos.map((elemento, index) => (
                <li key={index}>{elemento}</li>
            ))}
        </ul>
        
        </>
    )
}

export default ComponenteRenderizacaoLista