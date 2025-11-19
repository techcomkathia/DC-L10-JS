//componente que será utilizado diretamente no componente app e renderizado em todas as páginas

import { Link } from "react-router-dom";

export default function BarraDeNavegacao() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre Nós</Link>
                </li>
            </ul>
        </nav>
    );
}