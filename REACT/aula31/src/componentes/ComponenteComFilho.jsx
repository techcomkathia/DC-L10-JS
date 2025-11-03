export default function ComponenteComFilho({children}) {
    return (
        <div style={{border: '1px solid red'}}>
            <h1>Componente com filho</h1>
            <p>Todos os elementos abaixo são filhos do componente. Passados como propriedade children</p>
            {children}
        </div>
    )
}