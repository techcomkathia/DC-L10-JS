import { useState } from "react"

function AtualizacaoValorEestado() {

    const [contador, setContador] = useState(0)

    function aumentarContador() {
        setContador(contador + 1)
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={aumentarContador}>Aumentar</button>
        </div>
    )
}

export default AtualizacaoValorEestado