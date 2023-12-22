import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../assets/images/logo-image.png'
import Resume from '../../assets/Nathan_Zhao_resume.pdf'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faFile, faClose, faBars } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to="">
                <img src={Logo} alt="logo" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="" end>
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to={`${process.env.PUBLIC_URL}/about`}>
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to={`${process.env.PUBLIC_URL}/contact`}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>

                <FontAwesomeIcon 
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    size="3x"
                    className='close-icon'
                />
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nathan-z-33091921a/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/nathanjzhao">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href={Resume}>
                        <FontAwesomeIcon icon={faFile}/>
                    </a>
                </li>
            </ul>
            
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon'
            />
        </div>
    );
}

export default Sidebar