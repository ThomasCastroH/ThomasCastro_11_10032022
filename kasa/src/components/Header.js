import '../styles/Header.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className="header">
            <img src={logo} alt='kasa-logo' className="header-logo" />
            <nav className="header-nav">
              <Link to="/" className="nav-link">Accueil</Link>
              <Link to="/about" className="nav-link">A propos</Link>
            </nav>
        </div>

    )
}

export default Banner 