import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

function Atividade3() {
    const [produtos, setProdutos] = useState([]);
   
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(produtos => setProdutos(produtos))
        .catch(erro => console.log(erro))
    }, []); //só será executado na primeira renderização (montagem da página)

  return (
   <>
    <h1>Atividade 3</h1>
    <h1>Todos os produtos</h1>
    {
        produtos.map(item => (
            <Card key={item.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>
                        R$ {item.price}
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        ))
    }
   </>
  );
}

export default Atividade3;