import {Link} from 'react-router-dom'

function BarraNavegacao() {

    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todos-produtos">Todos produtos</Link></li>
        </ul>

    )
    
}

export default BarraNavegacao