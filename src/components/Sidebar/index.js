import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faEnvelope, faSuitcase, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faLinkedin, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    
        return (
        <div className = 'nav-bar'>
            <Link className='logo' to ='/'>
                <img src={LogoS} alt ="logo" />
                <img className ="sub-logo" src={LogoSubtitle} alt ="jake" />
            </Link>

        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" 
                onClick={() => setShowNav(false)}/>
            </NavLink>
            <NavLink  activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" 
                onClick={() => setShowNav(false)}/>
            </NavLink>
            <NavLink  activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"
                onClick={() => setShowNav(false)} />
            </NavLink>
            <NavLink  activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"
                onClick={() => setShowNav(false)} />
            </NavLink>
            <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className="close-icon"
            />
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/jakeloke/">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/lkingl123/">
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.facebook.com/JakeLoke95">
                    <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://wa.me/qr/4TTCETLZIBP4L1">
                    <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e' />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
        onClick={()=> setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
        />
        </div>

    )

}



export default Sidebar