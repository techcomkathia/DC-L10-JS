import Carousel from 'react-bootstrap/Carousel';


function Exemplo2({listaImagens}) {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://placehold.co/600x400" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://placehold.co/600x400" alt="" />

      </Carousel.Item>
      
     
    </Carousel>
  );
}

export default Exemplo2;