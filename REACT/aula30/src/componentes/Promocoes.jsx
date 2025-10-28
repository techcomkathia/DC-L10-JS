import Carousel from 'react-bootstrap/Carousel';

function Promocoes({listaImagens=['https://placehold.co/200x100', 'https://placehold.co/200x100']}){
    return(
        listaImagens?
        (
            (<Carousel>
            {listaImagens.map((imagem, index) => (
                <Carousel.Item key={index}>
                <img src={imagem} alt={`Imagem ${index}`} />
                </Carousel.Item>
            ))}
        </Carousel>)
        
        )
        :
        (<h1>Nenhuma promocao</h1>)
    )
}

export default Promocoes