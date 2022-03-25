import { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import '../styles/Slider.css';

function Slider(props) {
    const imgList = props.images

    const [current, setCurrent] = useState(0)
    const length = imgList.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(imgList) || imgList.length <= 0) {
        return null;
    }

    return (
        <div className="slider">
            <RiArrowLeftSLine className='left-arrow' onClick={prevSlide}/>
            <RiArrowRightSLine className='right-arrow' onClick={nextSlide}/>
            {imgList.map((slide, index) => {
                return (
                    <div key={index} className={index === current ? 'slide active' : 'slide'}>
                        {index === current && (<img className='slider-img' src={slide} alt="Lodging pictures"/>)}
                    </div>
                )
            })}
        </div>
    )
};

export default Slider