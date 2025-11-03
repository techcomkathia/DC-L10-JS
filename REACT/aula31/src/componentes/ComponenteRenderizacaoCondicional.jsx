function ComponenteRenderizacaoCondicional({texto}) {

    //se o texto existir será retornado um parágrafo com o texto

    //caso contrário será mostrado um texto alternativo (lorem)
    // elemento ? retorno se verdadeiro : retorno se falso

   return (
    (texto) ? 
        <p style={{color:'yellow'}}>{texto}</p> 
        : 
        <p style={{color:'red'}}>Texto alternativo Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, officia.</p>
    )
 
}

export function ComponenteRenderizacaoCondicional2({texto}) {
    return (
        <>
        <h1>Componente renderizado condicional.</h1>
        <p>Esta parte sempre será exibida idependente do texto ser passado como propriedade ou não</p>

        {
            (texto) && (<p style={{color:'yellow'}}>Essa parte será exibida apenas se o texto for passado como propriedade. O texto passado foi: {texto}</p>)}
        </>
        
    )
}

export default ComponenteRenderizacaoCondicional