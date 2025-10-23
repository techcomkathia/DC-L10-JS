export default function ListaNormais({arrayAtividades}){
    return(
    <>
        <h1>Atividades Normais</h1>

        <ul>
            {
                arrayAtividades.map((atividade, index)=>{
                    return(
                        <li key={index}>{atividade}</li>
                    )
                })
            }
            
        </ul>
    </>
    )
}