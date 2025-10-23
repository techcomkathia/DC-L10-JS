import { useState } from "react";

function Condicional(){
    const [info, setInfo] = useState() //inicializada como undefinid


    return(

        <div>
            <button onClick={()=> setInfo(prompt( 'digite a info'))}>Adicionar info</button>

        {//(condição? retorno se verdadeiro : retorno se falso)
            (info ? 
            <>
                <h1>Info existe e eu sou retornado</h1>
                <h1>{info}</h1>
            </> 
            
            : 
            
            <>
                <h2>A informação ainda não foi passada</h2>
            </> )
        }

        </ div>
    )
}

export default Condicional