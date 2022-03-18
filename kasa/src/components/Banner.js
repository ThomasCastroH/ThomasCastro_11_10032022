import '../styles/Banner.css'

function Banner(props) {
    const text = props.text;
    const img = props.img
    const alt = props.alt

    return (
        <div className="banner">
            <img className="banner-img" alt={alt} src={img} />
            <span className='banner-txt'>{text}</span>
        </div>
    )
}
export default Banner