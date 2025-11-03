//importar o hook useContext -> permite utilizar o contexto caso o componente esteja dentro do provedor
import { useContext } from 'react'
//importa o contexto ( não o componente provedor)
import { MeuContexto } from './MeuContexto'

export default function Componente2(){
    //adiciona uma nova fruta ao contexto
    const {frutas, setFrutas} = useContext(MeuContexto)

    return(
        <>
            <h1>Componente 2</h1>
            <p>Adicionar uma nova fruta ao contexto</p>
            <button onClick={() => setFrutas([...frutas, {nome: 'Laranja'}])}>Adicionar Laranja</button>
        </>
    )
}