import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Atividade3() {
    const [atividades, setAtividades] = useState([])
    const [inputTexto, setInputTexto] = useState('')
    const [inputUrgente, setInputUrgente] = useState(false) 
    const adicionarAtividade = () => {
        const novaAtividade = { texto: inputTexto, urgente: inputUrgente }
        setAtividades([...atividades, novaAtividade])
        setInputTexto('')
        setInputUrgente(false)
    }
    const removerAtividade = (index) => {
        const novasAtividades = [...atividades]
        novasAtividades.splice(index, 1)
        setAtividades(novasAtividades)
    }
    return (
        <div>
            <h2>Atividade 3</h2>
            <input
                type="text"
                value={inputTexto}
                onChange={(e) => setInputTexto(e.target.value)}
                placeholder="Digite a atividade"
            />
            <label>
                <input
                    type="checkbox"
                    checked={inputUrgente}
                    onChange={(e) => setInputUrgente(e.target.checked)}
                />
                Urgente
            </label>
            <button onClick={adicionarAtividade}>Adicionar Atividade</button>
            <ul>
                {atividades.map((atividade, index) => (
                    <li
                        key={index}
                        className={atividade.urgente ? 'text-danger' : 'text-primary'}
                    >
                        {atividade.texto}
                        <button onClick={() => removerAtividade(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Atividade3