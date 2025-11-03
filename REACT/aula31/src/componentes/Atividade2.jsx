// 2) Revisão efeito colateral
// Crie um componente que aplique um efeito colateral no carregamento da página e em todas atualizações de estado da variavel produto.
//esse componente tera dois campos de inputs (nome e preco) e um botão para adicionar criar o produto. Ao criar o produto ele deverá ser mostrado no console.log da pagina
import {useState, useEffect} from 'react'
export default function Atividade2(){

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')

    const [produto, setProduto] = useState({})

    useEffect(() => {
        console.log(produto)
    },[produto])

    return(
        <>
        <h1> Atividade 2</h1>

        <input type="text"  value={nome} placeholder='Digite o nome do produto' onChange={(e)=> setNome(e.target.value)}/>
        <input type="number"  value={preco} placeholder='Digite o preço do produto' onChange={(e)=> setPreco(e.target.value)}/>
        <button onClick={() => setProduto({nome, preco})}>Criar produto</button>
        
        </>
    )

}

