//importar o hook useContext -> permite utilizar o contexto caso o componente esteja dentro do provedor
import { useContext } from 'react'
//importa o contexto ( não o componente provedor)
import { MeuContexto } from './MeuContexto'

//estruturar o componente
export default function Componente1() {
    //trazer as informações do contexto
    //desestruturar o objeto compartilhado no contexto
    const{frutas, setFruta} = useContext(MeuContexto)
    //lista o nome de todas as frutas
    return(
        <>
            <h1>Componente 1</h1>
            <p>Lista todas as frutas que estão compartilhadas no contexto</p>

            <ul>
                {frutas.map((fruta, index) => 
                    <li key={index}>{fruta.nome}</li>
                )}
            </ul>
        </>
    )
}