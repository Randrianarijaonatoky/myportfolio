import './apropos.scss'

function Apropos()  {
    return (
        <>
            <section className="apropos">
                <main className="apropos-main">

                    <div className="apropos-head">
                        
                    <h1 className="apropos-titleBg">Apropos
                    </h1>
                    <h1 className="apropos-title">Apropos</h1>
                    </div>
                    <div className="apropos-cards">
                        <div className="apropos-cards-gallery">
                            <div className="apropos-cards-gallery-border">
                                
                            <img src="../../public/images/image2.jpg" alt="" className="apropos-cards-gallery-img" download />
                            </div>
                        </div>

                        <div className="apropos-cards-content">
                            <h1 className="apropos-cards-content-title1">Je suis
                            <span className="apropos-cards-content-title1-value"> Randianarijaona Hery Fanomezantsoa Toky Fandresena,</span>
                            </h1>


                            <div className="apropos-cards-content-details">

                                <h2 className="apropos-cards-content-details-para">Passionné par 
                                    <span className="apropos-cards-content-details-para-value"> développement  Laravel </span>
                                     et j'ai suivie la formation chez <span className="apropos-cards-content-details-para-gras"> Hopes Formation </span>
                                     pendant 6 mois
                                    
                                    
                                </h2>
                                <h2 className="apropos-cards-content-details-para">Durant cette formation,  j'ai acquis des compétences solides en

                                    <span className="apropos-cards-content-details-para-gras"> HTML, CSS, Sass, javascript, React JS, php et laravel.</span>
                                    
                                    
                                    
                                </h2>
                            </div>

                            <div className="apropos-cards-content-cv">
                                <a href='/images/bg_test.png' download="" className='apropos-cards-content-cv-btn' >Telecharger CV</a>
                            </div>
                            

                        </div>
                    </div>
                </main>
            </section>

        </>

    ) 
}

export default Apropos;
