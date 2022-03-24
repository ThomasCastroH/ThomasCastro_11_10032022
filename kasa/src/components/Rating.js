import { RiStarSFill } from 'react-icons/ri';
import "../styles/Rating.css"

function Rating(props) {
    const rating = props.rating
    const stars = ['', '', '', '', '']

    stars.forEach((element, index) => { 
        if (index < rating) {
            stars[index] = 'filled'
        } else {
            stars[index] = 'empty'
        }   
    });

    console.log(stars);

    return (
        <div>
            {stars.map( (star, index) => (
                <RiStarSFill key={index} className={star + ' rating-star'} />
            ))}
        </div>
    )
}

export default Rating