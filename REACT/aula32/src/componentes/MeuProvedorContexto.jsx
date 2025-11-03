import { MeuContexto } from "./MeuContexto";
import { useState } from "react";

export function MeuProvedorContexto({children}) {

    const [frutas, setFrutas] = useState([
        {nome: 'maçã', img: 'https://img.freepik.com/psd-gratuitas/close-up-de-uma-maca-deliciosa_23-2151868338.jpg?semt=ais_hybrid&w=740&q=80'},
        {nome:'banana', img: 'https://hortifrutibr.vtexassets.com/arquivos/ids/166838/Banana-Prata-Unidade.jpg?v=638887873499600000'}])
    return (
        <MeuContexto.Provider value={{frutas, setFrutas}}>
            {children}
        </MeuContexto.Provider>
    );
}