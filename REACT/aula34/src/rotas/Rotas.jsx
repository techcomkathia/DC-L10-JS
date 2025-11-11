import {Route, Routes} from 'react-router-dom'

import Home from '../paginas/Home'
import Carrinho from '../paginas/Carrinho'
import PaginaNaoEncontrada from '../paginas/PaginaNaoEncontrada'
import DetalheProduto from '../paginas/DetalheProduto'


export default function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/produtos/:id' element={<DetalheProduto />} />
            <Route path='/carrinho' element={<Carrinho />} />
            <Route path='*' element={<PaginaNaoEncontrada />} />
        </Routes>
    )
}