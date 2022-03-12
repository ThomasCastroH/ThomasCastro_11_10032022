import '../styles/Thumb.css'

function Thumb({props}) {
    return (
        <div className="thumb">
            <img className="thumb-img" alt="logement-img" src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
            <span className="thumb-name">Titre de la location</span>
        </div>
    )
}

export default Thumb