import'./footer.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { faOpen } from '@fortawesome/free-brands-svg-icons';


function Footer () {
    return(
        <footer className="footer">
            <h1 className="footer-title">tokyrandria36@gmail</h1>

            <main className="footer-main">
                <div className="footer-main-links">
                    <ul className="footer-main-links">
                        <li>
                            <a href="" className="footer-main-links-link">Acceuil</a>
                        </li>
                        <li>
                            <a href="" className="footer-main-links-link">Mes Porjet</a>
                        </li>
                        <li>
                            <a href="#competances" className="footer-main-links-link">Competances</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-main-contact">
                    <a href="mailto:tokyrandria36@gmail.com
                    " className="footer-main-contact-link" target='_blank' title='email'>
                        <FontAwesomeIcon icon={faEnvelope} className='footer-main-contact-link-icon' />

                    </a>
                    <a href="https://www.linkedin.com/in/toky-randrianarijaona-264a8a2b2/  
                    " className="footer-main-contact-link" target='_blank' title='LinkedinIn'>
                        <FontAwesomeIcon icon={faLinkedinIn} className='footer-main-contact-link-icon' />

                    </a>
                    <a href="
                    " className="footer-main-contact-link" target='_blank' title='Twitter'>
                        <FontAwesomeIcon icon={faXTwitter} className='footer-main-contact-link-icon' />

                    </a>
                </div>
            </main>

            <h1 className="footer-foot">copyright-portfolio-<span className="footer-foot-value">2024</span>
            
            </h1>
        </footer>

    );
}

export default Footer;
