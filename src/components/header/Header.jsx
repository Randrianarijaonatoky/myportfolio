    import './header.scss'
    import '../../js/obeserve'

    
    import ParticlesBackground from '../tsParticles/ParticlesBackground'; // Assurez-vous que le chemin est correct

    // import './animationHeader'
    import useMeasure from 'react-use-measure'
    import { useTrail, animated } from '@react-spring/web'

    // import styles from './styles.module.css'
    import styles from './styleDot.module.scss'


    import React from "react";


    const fast = { tension: 1200, friction: 40 }
    const slow = { mass: 10, tension: 200, friction: 50 }
    const trans = (x, y) =>
    `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

    // export default function Header() {
    //     const [trail, api] = useTrail(3, i => ({
    //         xy: [0, 0],
    //         config: i === 0 ? fast : slow,
    //     }))
    //     const [ref, { left, top }] = useMeasure()

    //     const handleMouseMove = e => {
    //         api.start({ xy: [e.clientX - left, e.clientY - top] })
    //     }

    //     return (
    //             <>  
    //                 <div className={styles.container}>
    //                 <svg style={{ position: 'absolute', width: 0, height: 0 }}>
    //                     <filter id="goo">
    //                     <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
    //                     <feColorMatrix
    //                         in="blur"
    //                         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
    //                     />
    //                     </filter>
    //                 </svg>
    //                 <div ref={ref} className={styles.hooksMain} onMouseMove={handleMouseMove}>
    //                     {trail.map((props, index) => (
    //                     <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
    //                     ))}
    //                 </div>
    //                 </div>

    //                 <div style={{ position: "relative", height: "100vh" }}>
    //     <Particles
    //         id="tsparticles"
    //         options={{
    //         background: {
    //             color: {
    //             value: "#0d47a1",  // Couleur de fond (bleu foncé ici)
    //             },
    //         },
    //         fpsLimit: 60,
    //         particles: {
    //             color: {
    //             value: "#ffffff",  // Couleur des particules (blanc)
    //             },
    //             links: {
    //             color: "#ffffff",
    //             distance: 150,
    //             enable: true,  // Active les lignes entre les particules
    //             opacity: 0.5,
    //             width: 1,
    //             },
    //             move: {
    //             enable: true,
    //             speed: 2,  // Vitesse de déplacement des particules
    //             },
    //             number: {
    //             density: {
    //                 enable: true,
    //                 area: 800,  // Zone où les particules apparaissent
    //             },
    //             value: 50,  // Nombre de particules
    //             },
    //             size: {
    //             value: 5,  // Taille des particules
    //             random: true,  // Taille aléatoire
    //             },
    //         },
    //         detectRetina: true,  // Optimisation pour les écrans rétina
    //         }}
    //     />
    //     </div>
    //                 <header className="header">
    //                     <div className="header-textes">
    //                         <h1 className="header-textes-title"> Je suis
    //                             Toky 
    //                             {/* <span> Randrianarijaona</span> */}
    //                         </h1>
    //                         <h1 className='header-textes-value'>Randrianarijaona</h1>

    //                         <p className="header-textes-para">Developeur Web</p>

    //                         <div className="header-textes-btns">
    //                             <button className="header-textes-btns-btn1">Contacter-moi</button>
    //                             <button className="header-textes-btns-btn2">Mes projet</button>
    //                         </div>

                            

    //                     </div>

    //                     <figure className="header-figure">
    //                         <img src="../../../public/images/imageVrai.png" alt="" className="header-figure-img" />

    //                         <div className="header-figure-point0"></div>
    //                         {/* <div className="header-figure-point1"></div> */}
    //                         <div className="header-figure-point2"></div>
    //                         <div className="header-figure-point3"></div>

    //                     </figure>

    //                 </header>

    //             </>
    //     )
    // }


    // function Header() {
    //     return (
    //     )
    // }

    // export default Header


    export default function Header() {
    const [trail, api] = useTrail(3, i => ({
        xy: [0, 0],
        config: i === 0 ? fast : slow,
    }))
    const [ref, { left, top }] = useMeasure()

    const handleMouseMove = e => {
        api.start({ xy: [e.clientX - left, e.clientY - top] })
    }

    //animation observe 

    return (
        <>  
            {/* <div className={styles.container}>
                <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                        <feColorMatrix
                            in="blur"
                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
                        />
                    </filter>
                </svg>
                <div ref={ref} className={styles.hooksMain} onMouseMove={handleMouseMove}>
                    {trail.map((props, index) => (
                        <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
                    ))}
                </div>
            </div> */}

            <div style={{ position: "absolute", height: "100vh" }}>


                <ParticlesBackground />
                
            
            </div>

            
            <header className="header" id='acceuil'>
                <div className="header-textes">
                    <h1 className="header-textes-title animate-on-scroll"> Je suis Toky </h1>
                    <h1 className='header-textes-value animate-on-scroll'>Randrianarijaona</h1>
                    <p className="header-textes-para animate-on-scroll">Développeur Laravel</p>

                    <div className="header-textes-btns animate-on-scroll">
                        <button className="header-textes-btns-btn1">Contacter-moi</button>
                        <button className="header-textes-btns-btn2">Mes projets</button>
                    </div>
                </div>

                <figure className="header-figure" data-aos="fade-up">
                    <img src="../../../public/images/imagePortfolioblue.png" alt="" className="header-figure-img" />
                    <div className="header-figure-point0"></div>
                    <div className="header-figure-point2"></div>
                    <div className="header-figure-point3"></div>
                </figure>
            </header>
        </>
    )
}