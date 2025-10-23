//Crie um formulário que tenha 2 campos: nome e cargo
//ao submeter esse formulário, verifique se os dois campos foram preenchidos e se sim, mostre as informações na tela em um h1 ou parágrafo.
//crie um componente e use no app.
//após submeter o formulário os campos deverão ser limpos.

import { useState } from "react";

export default function Atividade1(){
    const [nome, setNome]= useState('')
    const [cargo, setCargo]= useState('')
    const [funcionario, setFuncionario] = useState({nomeFunc:'',cargoFunc:''})

    function envioFormulario(e){
        e.preventDefault()
        if(nome==''|| cargo==''){
            alert('Preencha os dois campos')
            return
        }

        setFuncionario({
            nomeFunc: nome, 
            cargoFunc: cargo
        })
        alert('enviado')
        console.log(funcionario)
        setCargo('')
        setNome('')
    }

    return(
        <>
            <h1>Atividade 01</h1>

            <form action="#" onSubmit={(evento)=> envioFormulario(evento)}>
                <input type="text" placeholder="Digite seu nome" onChange={(e)=> setNome(e.target.value)} value={nome}/>
                <input type="text" placeholder="Digite seu cargo" onChange={(e)=> setCargo(e.target.value)} value={cargo}/>
                <input type="submit" />
            </form>

                <h1>Funcionário Cadastrado</h1>

            <h1>
                {funcionario.nomeFunc} {funcionario.cargoFunc}
            </h1>
        </>
    )
}