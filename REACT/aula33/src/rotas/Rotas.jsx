//importar todas as páginas da aplicação e o componente da página de erro 404
import PaginaNaoEncontrada from "../paginas/PaginaNaoEncontrada";
import Home from "../paginas/Home";
import SobreNos from "../paginas/SobreNos";


//importar os recursos do React Router Dom
import { Routes, Route } from "react-router-dom";



// criação do componente de Rotas 

export default function Rotas(){
    return(

        <Routes>
            {/* rota principal */}
            <Route element={<Home/>} path="/" exact/> 
            {/* rota para páginas que não são a página principal */}
            <Route element={<SobreNos/>} path="/sobre"/>
            {/* tratamento de rota para todos paths digitados 'errados' */}
            <Route element={<PaginaNaoEncontrada/>} path="*"/>
        </Routes>
    )
}