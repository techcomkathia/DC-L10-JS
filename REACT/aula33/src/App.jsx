import './App.css'
//importar o componente Rotas
import Rotas from './rotas/Rotas'
//importar o componente do React-Router-Dom
import { BrowserRouter } from 'react-router-dom'
import CoisaProvider from './contextos/CoisaProvider'
import BarraDeNavegacao from './componentes/BarraDeNavegacao'


function App() {
 
  return (
    <>
      <h1>Aula 33</h1>
      <h1>Elemento fora do Browser Router. Será mostrado em todas as páginas</h1>
      <CoisaProvider>
        <BrowserRouter>
          <BarraDeNavegacao/>
          <Rotas/>
        </BrowserRouter>
      </CoisaProvider>
    </>
  )
}

export default App
