import { FaInstagram } from 'react-icons/fa'
import { BsCartCheckFill } from 'react-icons/bs'
import './styles.css'
function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <div className="dsmovie-icon">
                        <BsCartCheckFill />
                        <h1>
                            PointOfertas
                        </h1>
                    </div>
                    <a href="https://www.instagram.com/pointofertass/">
                        <div className="dsmovie-contact-container">
                            <div className="dsmovie-icon">
                                <FaInstagram />
                            </div>
                            <p className="dsmovie-contact-link">/PointOfertas</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;