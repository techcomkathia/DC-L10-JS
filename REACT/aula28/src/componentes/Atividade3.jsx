
import { useState } from "react"
function Atividade3() {
  const [pessoasPre, setPessoaspre] = useState(['Maria', 'Paulo', 'Joaquim'])

  const [pessoas, setPessoas] = useState(['Ana', 'Carlos', 'Beatriz'])


  function adicionarPessoa(){
    let ehPreferencial= Number(prompt('Digite 1 para preferencial e 2 para Normal'))
    console.log(isNaN(ehPreferencial))

   
    // validação se a opção foi inserida corretamente
    while(ehPreferencial<1 || ehPreferencial>2 || isNaN(ehPreferencial)){
        ehPreferencial= Number(prompt('Digite uma opção válida. Digite 1 para preferencial e 2 para Normal'))
    }

    //se é pereferencial ou normal
    if(ehPreferencial == 1){
        setPessoaspre([...pessoasPre, prompt('Digite o nome')])
    }
    else{
        setPessoas([...pessoas, prompt('Digite o nome')])
    }
  }



  return (
    <>
    <h1>Preferencial</h1>
    <ul>
      {pessoasPre.map((pessoa, index) => {
        console.log(pessoa)
        return(
        <li key={index}>
            {pessoa} 
            <button>x</button>
        </li>)
        })
      }
    </ul>
    <button onClick={()=>setPessoaspre([...pessoasPre, prompt('Digite o nome da pessoa')])}>Adicionar Preferencial</button>
      <h1>Normal</h1>
     <ul>
      {pessoas.map((pessoal, index) => {
        console.log(pessoal)
        return(
        <li key={index}>{pessoal}</li>)
        })
      }
    </ul>
    <button onClick={()=>setPessoas([...pessoas, prompt('Digite o nome da pessoa')])}>Adicionar Normal</button>
      <br></br>
    <button onClick={adicionarPessoa}>Adicionar Pessoa</button>
      
    </>
  )
}

export default Atividade3