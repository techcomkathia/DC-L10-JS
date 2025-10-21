import './App.css'
import { useState } from 'react'
import Atividade1 from './componentes/Atividade1'
import nomeImagem from './assets/desligada.jpg'
import Atividade2 from './componentes/Atividade2'

function App() {
  function adicionar() {
    x++
    console.log(x)
  }
  let x = 10
  //criação da variavel de estado controlado e a função de atualização da variavel
  const [contador, setContador] = useState(0)

  function atualizarContador() {
    setContador(contador + 1)
    console.log('Atualizado o estado do contador para ' + contador)
  }
  
  const [frutas, setFrutas] = useState(['maçã', 'uva', 'banana'])
  return (

    //Primeira Parte da aula
    // <>
    //   <img src={nomeImagem} alt="" />
    //   <img src='https://i.sstatic.net/ybxlO.jpg' alt="" />
    //   <h1 >Aula 2 de React</h1>
    //   <h2>{ x }</h2>
    //   <button onClick={adicionar}>Adicionar + 1 </button>

    //   <h2>{ contador }</h2>
    //   <button onClick={atualizarContador}>Atualizar Contador + 1 </button>        

    //   <Atividade1></Atividade1>

    //   <Atividade2/>
    // </>

    //Segunda parte da aula
    //renderização por listas
    <>
    <ol>
      {frutas.map((item,index)=>{
          console.log(item)
          return(<li key={index} >{item}</li>)        
        })
      }
    </ol>

    <button onClick={()=>{
      setFrutas([...frutas, prompt('Digite uma fruta')])
    }}>Adicionar uma nova fruta</button>
      
    </>
  )
}

export default App
