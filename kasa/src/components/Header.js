import '../styles/Header.css'
import logo from '../assets/logo.svg'

function Banner() {
    return (
        <div className="header">
            <img src={logo} alt='kasa-logo' className="header-logo" />
            <nav className="header-nav">
              <span className="nav-link">Accueil</span>
              <span className="nav-link">A propos</span>
            </nav>
        </div>

    )
}

export default Banner 