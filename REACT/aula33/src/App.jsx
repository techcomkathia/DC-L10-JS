import './App.css'
//importar o componente Rotas
import Rotas from './rotas/Rotas'
//importar o componente do React-Router-Dom
import { BrowserRouter } from 'react-router-dom'


function App() {
 
  return (
    <>
      <h1>Aula 33</h1>
      <h1>Elemento fora do Browser Router. Será mostrado em todas as páginas</h1>
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
    </>
  )
}

export default App
