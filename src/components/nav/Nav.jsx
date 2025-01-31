import './nav.scss'
import '../../style/base.scss'

function Nav() {
    return(
        <nav className="Nav">
            <h2 className='titleNav'>Toky Randria</h2>

            <ul className="Nav-listes">
                <li className="Nav-listes-liste">Accueil</li>
                <li className="Nav-listes-liste">Mes projet</li>
                <li className="Nav-listes-liste">Contact</li>
                {/* <li className="Nav-listes-liste">Accueil</li> */}
            </ul>


        </nav>
    )
}
export  default Nav