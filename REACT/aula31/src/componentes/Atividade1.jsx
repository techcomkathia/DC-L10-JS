import { useState } from "react";

function Atividade1(){
    const [texto, setTexto]= useState('')
    const [cor, setCor] = useState()

    return(
        <>
            <form action="" onSubmit={(e)=>{
                //remoção do comportamento padrao do formulário
                e.preventDefault()
         
            }}>
                <input type="text" placeholder="Digite seu texto" onChange={(e)=>setTexto(e.target.value)} value={texto} /> 
                <div>
                    <button onClick={()=> setCor('red')}>Vermelho</button>
                    <button onClick={()=> setCor('green')}>Verde</button>
                    <button onClick={()=> setCor('blue')}>Azul</button>
                </div> 
                <button onClick={()=>{
                    setCor()
                    setTexto('')
                }}>Limpar campos</button>
            </form>
            

            <p style={{color:cor}}>{texto}</p>
        </>
    )
}

export default Atividade1