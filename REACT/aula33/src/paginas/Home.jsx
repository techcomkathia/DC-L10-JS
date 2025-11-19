//para consumir o contexto em uma rota que está envelopada pelo provider, use o hook useContext
import { useContext } from 'react'
//importar o contexto
import { CoisaContext } from '../contextos/CoisaContext'

export default function Home(){
    //mostrando a lista de coisas no componente Home
    const{coisas}= useContext(CoisaContext)
    return(
        <>
        <h1>Página Home</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab repudiandae, libero accusamus suscipit voluptates quos nisi optio corrupti? Nobis, dolor suscipit. Quia ipsam accusamus tenetur veniam ex. Sed eum sit suscipit, reprehenderit vitae, accusamus, non consectetur recusandae cum eaque laboriosam laudantium? Modi sapiente corporis ad fugiat eum veniam consectetur.</p>

        <ul>
            {coisas.map((coisa, index) => <li key={index}>{coisa}</li>)}
        </ul>
        
        </>
    )
}