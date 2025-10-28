import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Exemplo1({imagem, titulo, texto, btn}){
return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagem} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Button variant="primary">{btn}</Button>
      </Card.Body>
    </Card>
  );
}

export default Exemplo1