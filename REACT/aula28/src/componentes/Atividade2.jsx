import { useState } from 'react'
import desligada from '../assets/desligada.jpg'
const ligada = 'https://i.sstatic.net/ybxlO.jpg'

//crie um componente que tenha a imagem de uma lampada com dois botões (um para ligar e outro para desligar). Utilize uma imagem interna ao projeto e uma externa (link). Ao clicar no botão de ligar a imagem deve mudar para uma imagem diferente. Ao clicar no botão de desligar a imagem deve voltar ao estado inicial. Use um state para armazenar o estado da imagem. 

function Atividade2() {
    const [ imagem , setImagem ] = useState(desligada)

    return(
        <>
            <h1>Atividade 2</h1>
            <img src={imagem} alt=" lâmpada" />
            <button onClick={()=>setImagem(ligada)}>Ligar</button>
            <button onClick={()=>setImagem(desligada)}>Desligar</button>
        </>
    )
}

export default Atividade2