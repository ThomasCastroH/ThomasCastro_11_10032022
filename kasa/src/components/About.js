import Header from "./Header"
import Banner from "./Banner"
import Dropdown from "./Dropdown"
import aboutBannerImg from '../assets/about_section_bg.png'


function About() {
    return (
        <div className="container">
            <Header />
            <Banner img={aboutBannerImg} alt="About Banner"/>
            <Dropdown size="large" content="about" />
        </div>
    )
}
export default About