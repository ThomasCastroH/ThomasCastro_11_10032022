import '../styles/Gallery.css'
import Thumb from './Thumb'

async function getLodging() {
    let lodging = [];
  
    await fetch("../data/logements.json")
      .then((res) => res.json())
      .then((data) => {
        lodging = data.item;
      });
  
    console.log(lodging);;
}

getLodging();

function Gallery () {
    console.log();
    return (
        <div className="gallery">
            <Thumb />
        </div>
    )
}

export default Gallery