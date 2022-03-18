import '../styles/Error.css'
import Header from './Header'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
    return (
        <div>
            <Header />
            <div className='error-container'>
                <span className='error-code'>404</span>
                <span className='error-desc'>Oups! La page que vous demandez n'existe pas.</span>
                <NavLink className='error-redirect' to="/">Retourner sur la page d'acceuil</NavLink>
            </div>
        </div>
    )
}

export default ErrorPage