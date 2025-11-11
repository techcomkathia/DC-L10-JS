import {CarrinhoContext} from './CarrinhoContext'
import { useState } from "react";


export default function CarrinhoProvider({children}){
    const [carrinho, setCarrinho] = useState([]) //é inicializado com um array vazio, sem produtos até que sejam adicionados

    //o atributo value do provider recebe um OBJETO com os dados que serão compartilhados
    return(

        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}> 
            {children}
        </CarrinhoContext.Provider>

    )
}