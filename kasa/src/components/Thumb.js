import '../styles/Thumb.css'
import { NavLink } from 'react-router-dom';

function Thumb(props) {
    const logement = props.logement;

    return (
        <NavLink className='lodging-link' to={`/logement/${logement.id}`}>
        <div className="thumb" id={logement.id}>
            <img className="thumb-img" alt={logement.title} src={logement.cover} />
            <span className="thumb-name">{logement.title}</span>
        </div>
        </NavLink>
    )
}

export default Thumb