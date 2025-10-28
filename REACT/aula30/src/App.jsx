
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Exemplo1 from './componentes/Exemplo1'
import imagemExemplo from './assets/react.svg'

import Exemplo2 from './componentes/Exemplo2'
import Promocoes from './componentes/Promocoes'

function App() {


  return (
    <>
      <Promocoes listaImagens={['https://placehold.co/600x400', 'https://placehold.co/600x600']}></Promocoes>
      <Promocoes></Promocoes>
      <h1 className='bg-dark text-light m-5 p-2'>Aula 30</h1>
      <h2>Classes do Bootstrap no React</h2>
      <Exemplo1 imagem={imagemExemplo} titulo='Exemplo de Título' texto='Exemplo de Parágrafo' btn='Botão'/>

      <Exemplo2></Exemplo2>
    </>
  )
}

export default App
