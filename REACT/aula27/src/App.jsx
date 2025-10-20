import Cartao from './componentes/Cartao'
import './App.css'
import Lista from './componentes/Lista'
import TextoTitulo from './componentes/TextoTitulo'

function App() {
  
  return (
    <>
      <h1 id='ideficador'>Aula 1 de React</h1>

      <Cartao></Cartao>
      <Cartao/>
      <Lista></Lista>
      <Lista></Lista>

      <TextoTitulo titulo='Exemplo 1' texto = 'texto do exemplo 1 para o parágrafo'/>

      <TextoTitulo titulo='Exemplo 2' texto = 'jhakashjdkahsdkjhakjahdkj'/>
    </>
  )
}

export default App
