import '../styles/Banner.css'
import bannerImg from '../assets/home_section_bg.jpg'

function Banner() {
    return (
        <div className="banner">
            <img className="banner-img" alt="Home banner" src={bannerImg} />
            <span className='banner-txt'>Chez vous, partout et ailleurs</span>
        </div>
    )
}
export default Banner