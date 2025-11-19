//1º passo : importações
//contexto e hook
import { useContext } from "react"
import { ProdutosContext } from "../contextos/ProdutosContext"
//importar os componentes
import CardProduto from "../componentes/CardProduto"

export default function Home() {

    // 2º passo : usar o hook useContext
    const {produtos} = useContext(ProdutosContext)
    
    //3º passo : renderização por lista usando o componente CardProduto
    return (
        <div>
            <h1>Home</h1>

            <h2>Black Fraude do Cleitinho</h2>

            {/* <div className=" d-flex border border-danger border-5 p-5 m-5 flex-wrap">
                {produtos.map((produto,index)=> <CardProduto key={index} imagem={produto.imagem} nomeProduto={produto.nome} preco={produto.preco}/>
                
                )}
            </div> */}
            {/* validação com o array de produtos sem ser da api */}

            <div className=" d-flex border border-danger border-5  m-5 flex-wrap" style={{width:'1600px'}}>
                {produtos.map((produto,index)=> <CardProduto key={index} imagem={produto.image} nomeProduto={produto.title} preco={produto.price} id={produto.id}/>
                
                )}
            </div>

        </div>
    )
}