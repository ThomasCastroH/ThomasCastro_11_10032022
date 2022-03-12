import '../styles/Footer.css'
import footer_logo from '../assets/footer_logo.svg'

function Footer() {
    return (
        <div className="footer">
            <img src={footer_logo} alt='kasa-logo' className="footer-logo" />
            <span className="footer-disclaimer">© 2020 Kasa. All rights reserved</span>
        </div>
    )
}

export default Footer