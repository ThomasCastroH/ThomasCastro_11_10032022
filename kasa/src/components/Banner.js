import '../styles/Banner.css'
import logo from '../assets/logo.svg'

function Banner() {
    return (
        <div className="banner">
            <img src={logo} alt='kasa-logo' className="banner-logo" />
            <nav className="banner-nav">
              <span className="nav-link">Accueil</span>
              <span className="nav-link">A propos</span>
            </nav>
        </div>

    )
}

export default Banner 