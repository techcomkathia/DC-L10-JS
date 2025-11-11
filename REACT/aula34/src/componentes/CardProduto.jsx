import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduto({preco, nomeProduto, imagem}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagem} />
      <Card.Body>
        <Card.Title>{nomeProduto}</Card.Title>
        <Card.Title>R$ {preco}</Card.Title>
        <Button variant="primary">Adicionar ao Carrinho</Button>
      </Card.Body>
    </Card>
  );
}


export default CardProduto