import { RiStarSFill } from 'react-icons/ri';
import "../styles/Rating.css"

function Rating(props) {
    const rating = props.rating
    const stars = [...Array(5).keys()]

    return (
        <div>
            {stars.map( (star, index) => (
                rating<=star ? <RiStarSFill className="rating-star empty" key={index}/> : <RiStarSFill className="rating-star filled" key={index}/>
            ))}
        </div>
    )
}

export default Rating