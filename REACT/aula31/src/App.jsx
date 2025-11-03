import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ComponentePropriedades from './componentes/ComponentePropriedades'
import ComponenteComFilho from './componentes/ComponenteComFilho'
import ComponenteRenderizacaoLista from './componentes/ComponenteRenderizacaoLista'
import ComponenteRenderizacaoCondicional from './componentes/ComponenteRenderizacaoCondicional'
import { ComponenteRenderizacaoCondicional2 } from './componentes/ComponenteRenderizacaoCondicional'
import AtualizacaoValorEestado from './componentes/AtualizacaoValorEestado'
import Atividade1 from './componentes/Atividade1'
import EfeitoColateral from './componentes/EfeitoColateral'
import { EfeitoColateralConsumoAPI } from './componentes/EfeitoColateral'
import Atividade2 from './componentes/Atividade2'
import Atividade3 from './componentes/Atividade3'

function App() {

  const listaDeFrutas = ['banana', 'maca', 'pera', 'uva']

  return (
    <>
      <h1>Aula 31</h1>

      <ComponentePropriedades nome='jose' idade={25}></ComponentePropriedades>

      <ComponenteComFilho>
        <h2>Primeiro filho</h2>
        <h2>Segundo filho</h2>
      </ComponenteComFilho>

      <ComponenteRenderizacaoLista listaDeElementos={listaDeFrutas}></ComponenteRenderizacaoLista>

      <ComponenteRenderizacaoLista/>

      <ComponenteRenderizacaoCondicional/>
      <ComponenteRenderizacaoCondicional texto={'Olá mundo!'}/>

      <ComponenteRenderizacaoCondicional2/>
      <ComponenteRenderizacaoCondicional2 texto={'Olá mundo!'}/>

      <AtualizacaoValorEestado/>

      <Atividade1/>

      <EfeitoColateral/>

      <Atividade2/>

      <EfeitoColateralConsumoAPI/>

      <Atividade3/>


    </>
  )
}

export default App
