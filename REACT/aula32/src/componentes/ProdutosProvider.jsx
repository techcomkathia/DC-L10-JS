import { useState } from "react";
import { ProdutosContexto } from "./ProdutosContexto";



export default function ProdutosProvider({children}) {
    const [produtos, setProdutos] = useState([
        {id: 1, nome: 'produto 1', preco: 10, img:'https://picsum.photos/200/300'},
        {id: 2, nome: 'produto 2', preco: 20, img:'https://picsum.photos/200/300'},
        {id: 3, nome: 'produto 3', preco: 30, img:'https://picsum.photos/200/300'},
    ])
    return (
        <ProdutosContexto.Provider value={{produtos, setProdutos}}>
            {children}
        </ProdutosContexto.Provider>
    )
}