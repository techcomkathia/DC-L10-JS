
import Card from 'react-bootstrap/Card';

function CardProduto({preco, titulo, texto}){
return (
    <Card style={{ width: '18rem' }}>
     <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Card.Text>R$ {preco}</Card.Text>       
      </Card.Body>
    </Card>
  );
}

export default CardProduto



