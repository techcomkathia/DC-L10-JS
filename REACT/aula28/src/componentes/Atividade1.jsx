// Crie um componente que tenha um botão que ao ser clicado exiba uma mensagem na tela:
//nome, idade e email do usuário. Esses dados devem ser passados atraves do prompt para variáveis de estado controlado com um state.

import CardUsuario from "./CardUsuario";
import { useState } from "react";

function Atividade1() {
    const [nomeUsuario, setNome] = useState('')
    const [idadeUsuario, setIdade] = useState('')
    const [emailUsuario, setEmail] = useState('')

    function inserirDados() {
        let n = prompt('Digite o nome do usuário')
        let i = prompt('Digite a idade do usuário')
        let e = prompt('Digite o email do usuário')
        setNome(n)
        setIdade(i)
        setEmail(e)
    }
    return (
        <div>
            <h1>Atividade 1</h1>
            <CardUsuario nome={nomeUsuario} idade={idadeUsuario} email={emailUsuario} />

            <button onClick={inserirDados}>Clique aqui para inserir os dados do usuário</button>
        </div>
    );
}

export default Atividade1