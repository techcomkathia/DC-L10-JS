import './App.css'
//importar a folha de css do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { MeuProvedorContexto } from './componentes/MeuProvedorContexto'
import Componente1 from './componentes/Componente1'
import Componente2 from './componentes/Componente2'
import ProdutosProvider from './componentes/ProdutosProvider'
import Atividade2 from './componentes/Atividade2'
import Atividade3 from './componentes/Atividade3'

function App() {
  

  return (
    <>

      <MeuProvedorContexto>
        <h1 className='text-danger'>Aula 32</h1>

        <h2>Criando um contexto para a aplicação</h2>
        <ol >
          <li>Criar o contexto : arquivo meuContexto.jsx, com o hook createContext</li>
          <li>Criar o provider : arquivo meuProvider.jsx</li>
          <li>Prover o contexto  a aplicação: arquivo App.jsx, passando os componentes filhos</li>
          <li>Consumir o contexto: arquivo Componente1.jsx e Componente2.jsx</li>
        </ol>

        <Componente1/>
        <Componente2/>

       <ProdutosProvider>
        {/* {INSERIR O COMPONENTES QUE USÃO O CONTEXTO DOS PRODUTOS ABAIXO} */}
        <Atividade2/>
        <Atividade3/>
      </ProdutosProvider>

      
      </MeuProvedorContexto>
    </>
  )
}

export default App
