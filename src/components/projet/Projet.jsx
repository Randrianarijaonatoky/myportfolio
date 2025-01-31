import '../projet/projet.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Projet() {
    return(
        <section className="projet">
            <main className="projet-main">
                <div className="projet-head">

                    <h1 className="projet-titleBg">Mes projets</h1>
                    <h1 className="projet-title">Mes projets</h1>

                </div>
            <div className="projet-cards">
   
                <a className="projet-cards-card" href='https://github.com/Randrianarijaonatoky/Egrossistev2.git' target='_blank'>
                    <i class="fa-brands fa-php"></i>
                    <figure className='projet-cards-card-figure'>
                        <img src="./public/images/projet1-2.png" alt="" className="projet-cards-card-img" />
                        <div className="projet-cards-card-figure-bg">
                            {/* <h2 className="projet-cards-card-figure-bg-name">Laravel</h2> */}
                        </div>
                        

                    </figure>
                    
                    <div className="projet-cards-card-dots">
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                    </div>


                    <div className="projet-cards-card-textes">
                        
                        <p className="projet-cards-card-textes-para">Projet Final</p>
                        <h1 className="projet-cards-card-textes-title">E-Grossiste</h1>

                        <p className="projet-cards-card-textes-detail">Egrossiste est une plateforme de commerce en ligne que j'ai développée pour simplifier l'expérience d'achat des utilisateurs. Ce site s'adresse principalement à ceux qui ne peuvent pas se déplacer pour faire leurs achats, en leur offrant la possibilité de commander en ligne avec une option de livraison pratique. Les utilisateurs peuvent également effectuer des paiements sécurisés en ligne et bénéficier de réductions à chaque achat. Ce projet reflète ma capacité à créer des solutions innovantes qui améliorent l'accessibilité et le confort des clients dans le domaine de l'e-commerce.</p>
                        <p className="projet-cards-card-textes-date">En 03 Octobre 2024</p>

                    </div>
 
                </a>
                <a className="projet-cards-card" href='https://github.com/Randrianarijaonatoky/Voyage.git' target='_blank'>
                    <figure className='projet-cards-card-figure'>

                        <img src="./public/images/projet2.png" alt="" className="projet-cards-card-img" />
                        <div className="projet-cards-card-figure-bg">
                            {/* <h2 className="projet-cards-card-figure-bg-name">PHP</h2> */}
                        </div>

                    </figure>

                    <div className="projet-cards-card-dots">
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                        <FontAwesomeIcon icon={faCircle} size="2x" className='projet-cards-card-dots-dot' />
                    </div>

                    <div className="projet-cards-card-textes">
                        <p className="projet-cards-card-textes-para">Mi-parcour</p>
                        
                        <h1 className="projet-cards-card-textes-title">Mada Tour</h1>
                        
                        <p className="projet-cards-card-textes-detail">Mada Tour est une plateforme web que j'ai conçue pour une agence de voyage, permettant aux utilisateurs d'organiser leurs voyages facilement. Le site propose une interface conviviale où les visiteurs peuvent explorer différentes options de voyage et effectuer des réservations en ligne de manière simple et sécurisée. Ce projet met en avant mes compétences en développement web dans le secteur du tourisme, avec une attention particulière portée à l'expérience utilisateur et à la réservation en ligne.</p>

                        <p className="projet-cards-card-textes-date">En 08 Juillet 2024</p>
                    </div>

                </a>



            </div>

            </main>
        </section>

    )
}
export  default Projet
