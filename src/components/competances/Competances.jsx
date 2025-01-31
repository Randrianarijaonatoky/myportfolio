import'./competances.scss';
import React, { useState, useEffect , useRef} from 'react';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'; 
import { faCss3 } from '@fortawesome/free-brands-svg-icons'; 
import { faPhp } from '@fortawesome/free-brands-svg-icons'; 
import { faLaravel } from '@fortawesome/free-brands-svg-icons'; 
import { faReact } from '@fortawesome/free-brands-svg-icons'; 
import { faDatabase, faRandom } from '@fortawesome/free-solid-svg-icons';
import { FiDatabase } from 'react-icons/fi';
import { GoDatabase } from 'react-icons/go';
import { DiPhp } from "react-icons/di";





// animation sur les pourcentage 
// const Competance = ({title, targetPercentage}) => {
//     const [percentage, setPercentage] = useState(0);


//     useEffect(() => {
//         let start = 0 ;
//         const end = targetPercentage;
//         const duration = 2000;
//         const spetTime = Math.abs(Math.floor(duration / end));

//         const timer = setInterval(() => {
//             start +=1 ;
//             setPercentage(start);


//             if(start === end) {
//                 clearInterval(timer);

//             }
//         }, spetTime);

//         return () => clearInterval(timer);


//     }, [targetPercentage]);

//     return (
//         <div className="competances-cards-front-card">
//         <div className="competances-cards-front-card-head">
//             <h2 className="competances-cards-front-card-title">{title}</h2>
//             <p className="competances-cards-front-card-value">{percentage}%</p>
//         </div>
//         <div className="competances-cards-front-card-contenair">
//             <div
//             className="competances-cards-front-card-contenair-progress"
//             style={{ width: `${percentage}%`, transition: 'width 0.5s ease-in-out' }}
//             ></div>
//         </div>
//         </div>
//     );
// }

const Competence = ({ title, targetPercentage }) => {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const competenceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // La moitié de l'élément doit être visible pour déclencher l'animation
    );

    if (competenceRef.current) {
      observer.observe(competenceRef.current);
    }

    return () => {
      if (competenceRef.current) {
        observer.unobserve(competenceRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = targetPercentage;
      const duration = 500; // Durée de l'animation en millisecondes
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setPercentage(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer); // Cleanup pour éviter les fuites de mémoire
    } else {
      setPercentage(0); // Réinitialiser le pourcentage lorsque l'élément sort du champ de vision
    }
  }, [isVisible, targetPercentage]);

  return (
    <div className="competances-cards-front-card" ref={competenceRef}>
      <div className="competances-cards-front-card-head">
        <h2 className="competances-cards-front-card-title">{title}</h2>
        <p className="competances-cards-front-card-value">{percentage}%</p>
      </div>
      <div className="competances-cards-front-card-contenair">
        <div
          className="competances-cards-front-card-contenair-progress"
          style={{ width: `${percentage}%`, transition: 'width 0.5s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};
function Competances() {
    return(
        <>
        
            <section className="competances" id='competances'>
                <main className="competances-contenair">
                  <div className="competances-head">

                    <h1 className="competances-titleBg">Competances</h1>
                    <h1 className="competances-title">Competances</h1>
                  </div>


                    <div className="competances-cards" >
                        <figure className="competances-cards-about">
                            <div className="competances-cards-about-content1">
                                <div className="competances-cards-about-content1-card">
                                <FontAwesomeIcon icon={faReact} className='competances-cards-about-content1-card-icon' />
                                
                                  <h1 className="competances-cards-about-content1-card-title">React</h1>

                                </div>
                                <div className="competances-cards-about-content1-card">
                               {/* <FontAwesomeIcon icon={faDatabase} className='competances-cards-about-content1-card-icon' /> */}
                               {/* <Database />  */}
                               <GoDatabase className='competances-cards-about-content1-card-icon'/>
                              
                                <h1 className="competances-cards-about-content1-card-title">MySQL</h1>

                                </div>
                                
                            </div>
                            <div className="competances-cards-about-content1">
                                <div className="competances-cards-about-content1-card">
                               <FontAwesomeIcon icon={faPhp} className='competances-cards-about-content1-card-icon' />
                                <h1 className="competances-cards-about-content1-card-title">PHP</h1>

                                </div>
                                <div className="competances-cards-about-content1-card">
                               <FontAwesomeIcon icon={faLaravel} className='competances-cards-about-content1-card-icon' />
                                <h1 className="competances-cards-about-content1-card-title">LARAVEL</h1>

                                </div>
                            </div>
                            

                        </figure>
                        <figure className="competances-cards-front">
                            
                            

                            <Competence title="React" targetPercentage={35} />
                            <Competence title="Javascript" targetPercentage={30} />
                            <Competence title="PHP" targetPercentage={40} />
                            <Competence title="Laravel" targetPercentage={40} />
                            <Competence title="MySQL" targetPercentage={30} />
                        </figure> 
                        
                    </div>
                </main>
            </section>
        </>
    )
}

export default Competances;
