//2) crie um formulário com um campo de input para o texto da atividade e um select o tipo da atividade (normal ou urgente)
// as atividades urgentes deverão ser mostradas em uma ol e as normais em um ul
//ao ser enviado o formulário deverá validar se existe texto para a atividade e se o select foi preenchido
//após o envio, limpar todos os valores dos campos relacionados aos inputs da atividade e do select

//atividadesImportantes = ['revisar js']
//atividadesNormais = ['revisar html', 'revisar css']
//dica: use o map para a renderização das atividades urgentes e normais, use o id para o key dos li da lista
import { useState } from "react";
import ListaImportantes from './ListaImportantes'
import ListaNormais from "./ListaNormais";

export default function Atividade2(){
    //controle de estado para as variáveis do formulário
    const[textoAtividade, setTextoAtividade] = useState('')
    const[status, setStatus]= useState('')
    //listas de atividades
    const [importantes, setImportantes] = useState(['revisar js'])
    const[normais, setNormais] = useState(['revisar html', 'revisar css'])

    function adicionarAtividadeNaLista(e){
        e.preventDefault()

        if(textoAtividade==''|| status==''){
            alert('Preencha os campos de texto e status da atividade')
            return
        }
        if(status=='importante'){
            setImportantes([...importantes, textoAtividade])
        }
        else{
            setNormais([...normais, textoAtividade])
        }
        setStatus=''
        setTextoAtividade=''
    }


    return(
        //formulário para adicionar uma nova atividade
        // //listas das atividades pelos componentes
        
        <>

            <h1>Atividade 2</h1>
            <form action="#" onSubmit={(evento)=> adicionarAtividadeNaLista(evento)}>
                <input type="text" placeholder="digite a atividade" value={textoAtividade}
                onChange={(e)=>{
                    setTextoAtividade(e.target.value)
                }}
                />
                <select name="" id="" value={status} onChange={(e)=>{
                    setStatus(e.target.value)
                }}>
                    <option value="importante">Importante</option>
                    <option value="normal">Normal</option>
                </select>
                <input type="submit" />
            </form>

            <div style={{display:'flex', margin:'10px'}}>
                <div style={{margin:'10px'}}>
                    <ListaImportantes arrayAtividades={importantes}/>
                </div>
                
                <div style={{margin:'10px'}}>
                   <ListaNormais arrayAtividades={normais}/> 
                </div>
                
            </div>
            

        
        </>
    )
}