import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardProduto({preco, nomeProduto, imagem, id}) {
  return (
    <Link to={`/produtos/${id}`}>
        <Card style={{ width: '18rem' }} className='m-5'>
        <Card.Img variant="top" src={imagem} />
        <Card.Body>
          <Card.Title>{nomeProduto}</Card.Title>
          <Card.Title>R$ {preco}</Card.Title>
          <Button variant="primary">Adicionar ao Carrinho</Button>
        </Card.Body>
        </Card>
    </Link>
  );
}


export default CardProduto