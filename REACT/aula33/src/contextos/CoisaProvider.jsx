import { CoisaContext } from "./CoisaContext";
import { useState } from "react";

function CoisaProvider({children}){
    //uma variável de estado controlado e sua função de atualização
    //que vai ser compartilhada com os componentes filhos atraves do contexto
    const [coisas, setCoisas] = useState(['coisa 1', 'coisa 2', 'coisa 3'])
    
    return (
        //o provider recebe um objeto com a variável de estado controlado e sua função de atualização e será compartilhada com os componentes filhos do componente pai(CoisaProvider)
        <CoisaContext.Provider value={{coisas, setCoisas}}>
            {children}
        </CoisaContext.Provider>
    )
}

export default CoisaProvider

const Produtos = [
    {id: 1, nome: 'produto 1', preco: 10, img:'https://picsum.photos/200/300'},
    {id: 2, nome: 'produto 2', preco: 20, img:'https://picsum.photos/200/300'},
    {id: 3, nome: 'produto 3', preco: 30, img:'https://picsum.photos/200/300'},
]