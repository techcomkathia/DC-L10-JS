import {ProdutosContext} from '../contextos/ProdutosContext.jsx'
import { useState, useEffect } from "react";

export default function ProdutosProvider({children}){
    /*let listaprodutos = [
        {
            id: 1,
            nome: 'coisa1',
            preco: 10.00,
            imagem: 'https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            
        }
        ,
        {
            id: 2,
            nome: 'coisa2',
            preco: 10.00,
            imagem: 'https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            
        }
        ,
        {
            id: 3,
            nome: 'coisa3',
            preco: 10.00,
            imagem: 'https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            
        }
    ]*/
    // const [produtos, setProdutos] = useState(listaprodutos) // validado para a atividade de compartilhamento de contexto e mudado para o consumo de API

    const [produtos, setProdutos] = useState([]) //é inicializado com um array vazio, sem produtos até que sejam adicionados atraves do consumo de API

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())//Converte a resposta para o formato objeto
            .then(dados => setProdutos(dados))//Passa os dados para o estado;
            .catch(erro => console.log(erro))
    }, []) //esse efeito colateral só será executado na montagem da página

    //o atributo value do provider recebe um OBJETO com os dados que serão compartilhados
    return(

        <ProdutosContext.Provider value={{produtos, setProdutos}}> 
            {children}
        </ProdutosContext.Provider>

    )
}