export default function ListaImportantes({arrayAtividades}){
    return(
    <>
        <h1>Atividades Importantes</h1>

        <ol>
            {
                arrayAtividades.map((atividade, index)=>{
                    return(
                        <li key={index}>{atividade}</li>
                    )
                })
            }
            
        </ol>
    </>
    )
}