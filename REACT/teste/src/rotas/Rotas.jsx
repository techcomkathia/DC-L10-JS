//importar todos os componentes das páginas (home, todos os produtos, página não encontrada)
import Home from "../paginas/Home";
import TodosProdutos from "../paginas/TodosProdutos";
import PaginaNaoEncontrada from "../paginas/PaginaNaoEncontrada";

//importar os recursos do react router dom 
//Routes e Route

import {Routes, Route} from 'react-router-dom'

export default function Rotas(){
    return(

        <Routes>
            <Route element={<Home/>} path="/" exact/>
            <Route element={<TodosProdutos/>} path="/todos-produtos"/>
            <Route element={<PaginaNaoEncontrada/>} path="*"/>
        </Routes>
    )
}