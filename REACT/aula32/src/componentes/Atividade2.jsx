import { useContext } from "react";
import { ProdutosContexto } from "./ProdutosContexto";
import Card from 'react-bootstrap/Card';
// para o container que será usado para agrupar os cards use classes do bootstrap para colocar uma borda um espaçamento interno e use o display flex para deixar os cards um ao lado do outro
export default function Atividade2() {
    //desestruturar o objeto compartilhado no contexto
    const {produtos, setProdutos} = useContext(ProdutosContexto)

    return (
        <>
            <h1>Atividade 2</h1>
            <p>Lista todos os produtos que estão compartilhados no contexto</p>

            <div className="border border-danger border-5 p-5 d-flex">
                {
                    produtos.map((produto, index)=>{
                        return(
                            <Card style={{ width: '18rem' }} key={index}>
                                <Card.Img variant="top" src={produto.img} />
                                <Card.Body>
                                    <Card.Title>{produto.nome}</Card.Title>
                                    <Card.Text>
                                       R$ {produto.preco}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>

        </>)
}   