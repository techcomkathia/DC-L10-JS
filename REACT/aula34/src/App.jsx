import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' // importar a folha de css do bootstrap
import CardProduto from './componentes/CardProduto'

// configuração do rotemento
import { BrowserRouter} from 'react-router-dom'
import Rotas from './rotas/Rotas'

// importação dos provides de contexto
import CarrinhoProvider from './contextos/CarrinhoProvider'
import ProdutosProvider from './contextos/ProdutosProvider'

function App() {
  

  return (
    <>
      <h1>Aula 34</h1>

      <BrowserRouter>
          <ProdutosProvider>
            <CarrinhoProvider>
              <Rotas/>
            </CarrinhoProvider>
          </ProdutosProvider>
      </BrowserRouter>

      
    </>
  )
}

export default App
