import './card1.scss'

// Importer le composant FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importer l'icône spécifique
import { faPenNib } from '@fortawesome/free-solid-svg-icons'; // L'icône "PenNib"
import { faCode } from '@fortawesome/free-solid-svg-icons'; // L'icône "PenNib"
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons'; // L'icône "PenNib"
function Card1() {
    return (
        <>
        <section className="card1">
            
            <div className="card1-card">
                <FontAwesomeIcon icon={faPenNib} size="2x" className='card1-card-icon' />
                <h1 className="card1-card-title">+12.6</h1>
                <p className='card1-card-value'>Graphic Design</p>
            </div>
            <div className="card1-card">
                <FontAwesomeIcon icon={faCode} size="2x" className='card1-card-icon' />
                <h1 className="card1-card-title">+12.6</h1>
                <p className='card1-card-value'>Developpement Web</p>
            </div>
            <div className="card1-card">
             <FontAwesomeIcon icon={faVideoCamera} size="2x" className='card1-card-icon' />
                <h1 className="card1-card-title">+12.6</h1>
                <p className='card1-card-value'>Lorem</p>
            </div>
        </section>
            

            
        </>
    )
}

export default Card1