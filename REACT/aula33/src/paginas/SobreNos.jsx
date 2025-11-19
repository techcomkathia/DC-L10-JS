import { useContext } from "react"
import { CoisaContext } from "../contextos/CoisaContext"
import { Link } from "react-router-dom"
//permite navegar entre as rotas/páginas sem recarregar a página e consequente 'reiniciar' o contexto


export default function SobreNos(){
    //desestruturar o contexto
    const{coisas, setCoisas}= useContext(CoisaContext)

    return(
        <div>
            <h1>Sobre Nós</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia, esse ab consequatur recusandae libero eligendi maxime illum aut, itaque quas ducimus voluptatem modi quod, amet excepturi. Reprehenderit, temporibus. Est facilis ab deleniti odio maiores voluptas temporibus recusandae unde assumenda deserunt quos sed nobis nemo libero aspernatur eum, necessitatibus ipsa. Quae doloremque rem nostrum rerum eveniet excepturi quam libero ad corrupti maxime voluptatem unde natus nobis recusandae incidunt architecto accusamus fugiat iste, vel vero sunt quaerat assumenda quasi. Distinctio, cumque?</p>

            <ul>
                {coisas.map((coisa, index) => <li key={index}>{coisa}</li>)}
            </ul>

            <button onClick={() => setCoisas([...coisas, `coisa nova ${coisas.length + 1}`])}>Adicionar uma nova Coisa</button>
        </div>
    )
}