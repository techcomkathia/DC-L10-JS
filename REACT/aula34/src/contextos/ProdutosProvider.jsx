import {ProdutosContext} from '../contextos/ProdutosContext.jsx'
import { useState } from "react";

export default function ProdutosProvider({children}){
    let listaprodutos = [
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
    ]
    const [produtos, setProdutos] = useState(listaprodutos) 

    //o atributo value do provider recebe um OBJETO com os dados que serão compartilhados
    return(

        <ProdutosContext.Provider value={{produtos, setProdutos}}> 
            {children}
        </ProdutosContext.Provider>

    )
}