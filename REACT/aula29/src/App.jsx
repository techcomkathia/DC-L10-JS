import { useState } from 'react'
import './App.css'
import ExemploFormulario from './componentes/ExemploFormulario'
import Atividade1 from './componentes/Atividade1'
import Atividade2 from './componentes/Atividade2'
import Condicional from './componentes/Condicional'
import Atividade3 from './componentes/Atividade3'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aula 29</h1>

      <Condicional/>

      <ExemploFormulario/>

      <Atividade1/>

      <Atividade2/>

      <Atividade3/>

    </>
  )
}

export default App
