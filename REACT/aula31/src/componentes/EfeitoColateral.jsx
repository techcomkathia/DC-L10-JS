import { useState, useEffect } from "react";


export default function EfeitoColateral(){
 const[numero, setNumero] = useState(0)
 const[outra, setOutra] = useState('')

//usar o useEffect para executar uma função na montagem da página (1º carregamento) e em todas as novas renderizações)
//useEffect(()=>setNumero(numero+1))

//o useEffect recebendo a função de callback e o array de depencias vazio, será executado apenas na montagem da página
//useEffect(()=>setNumero(numero+1),[])

//aplicando o efeito colateral a atulização de estado de uma variável.Todas as vezes que a variável outra for atualizada, será executado um efeito colateral: atualizar o valor do numero para +100 e mostrar no console uma mensagem
useEffect(()=>{
    setNumero(numero+100)
    console.log('Fui executado como efeito colateral, pois a página foi renderizada')
    },
    [outra]
)

 return(
    <>
    <h1 onClick={()=>{ setNumero(numero+1)}}> Clique aqui ! {numero}</h1>
    <button onClick={()=>setOutra(prompt('Digite o valor para a atualização de outra'))}>atualizar variável outra</button>
    </>
 )
    

}

export function EfeitoColateralConsumoAPI(){
    // Irá montar a página com as informações de usuários da api
    const [usuarios, setUsuarios] = useState([]) // inicializa com um array vazio

    //para a montagem da página, irá executar o efeito colateral: consumir a api e preencher o array de usuários
    //isso não acontecerá em todas as novas renderizações
    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
        .then(response => response.json())
        .then(lista => {
            setUsuarios(lista)
            console.log('Atualizei o array de usuários com base na requisição da api')
        }) //atualiza o array de usuários
        .catch(erro => console.log(erro))
    },[])

    return(
        <>
        <h1>Lista de usuários</h1>
        <ul>
            {usuarios.map(user => <li key={user.id}>{user.username}</li>)}
        </ul>
        </>
    )
}