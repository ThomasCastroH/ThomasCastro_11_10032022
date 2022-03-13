import '../styles/Thumb.css'

function Thumb(props) {
    const logement = props.logement;
    return (
        <div className="thumb" id={logement.id}>
            <img className="thumb-img" alt={logement.title} src={logement.cover} />
            <span className="thumb-name">{logement.title}</span>
        </div>
    )
}

export default Thumb