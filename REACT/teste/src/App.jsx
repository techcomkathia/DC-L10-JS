import './App.css'
//importar o arquivo de Rotas
import Rotas from './rotas/Rotas'
//importar o componente BrowserRoute do react-router-dom
import {BrowserRouter} from 'react-router-dom'

import BarraNavegacao from './componentes/BarraNavegacao'

function App() {
  //1) criar o projeto/ inicializar o servidor
  //2) fazer a instalação da dependência react-router-dom (EM UM OUTRO TERMINAL)
  //3) criar a estrutura das pastas (componentes/ paginas/ rotas/ contexto)
  //4) criar os arquivos dos componentes das páginas
  //5) criar o componente das rotas
  //6) usar o browser router no app, importar e usar o componente das rotas


  return (
    <>
      <h1>Atividade 1</h1>
      <BrowserRouter>
          <BarraNavegacao/>
          <Rotas/>
      </BrowserRouter>

     
    </>
  )
}

export default App
