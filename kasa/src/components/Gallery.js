import '../styles/Gallery.css'
import Thumb from './Thumb'


function Gallery () {
    const logementData = require('../data/logements.json');

    return (
        <div className="gallery">
            {logementData.map( (logement) => {
                return  <Thumb key={logement.id} logement={logement} />
            })
            }
        </div>
    )
}

export default Gallery