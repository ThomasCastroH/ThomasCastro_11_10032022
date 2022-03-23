import Header from "./Header"
import Banner from "./Banner"
import Dropdown from "./Dropdown"
import Footer from "./Footer"
import aboutBannerImg from '../assets/about_section_bg.png'
import '../styles/About.css'

const aboutUs = [
    {
        id: 1,
        title: 'fiabilité',
        content: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`
    },
    {
        id: 2,
        title: 'respect',
        content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`
    },
    {
        id: 3,
        title: 'service',
        content: `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`
    },
    {
        id: 4,
        title: 'sécurité',
        content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
    }
];

function About() {

    
    return (
        <div className="container">
            <Header />
            <Banner img={aboutBannerImg} alt="About Banner"/>
            <div className="about-dropdown">
                {aboutUs.map( element => (
                    <Dropdown key={element.id} size='large' title={element.title}>
                        <div>
                            <span>{element.content}</span>
                        </div>
                    </Dropdown>
                ))}
            </div>
            <Footer />
        </div>
    )
}
export default About