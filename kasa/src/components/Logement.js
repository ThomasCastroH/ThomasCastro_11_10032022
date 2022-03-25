import Dropdown from './Dropdown'
import Tag from './Tag'
import Header from './Header'
import Rating from './Rating';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Slider from './Slider';
import '../styles/Logement.css'

function Logement() {
    const { id } = useParams();
    const logementData = require('../data/logements.json');
    const logement = logementData.filter(logement => logement.id === id);
    const logementInfo = logement[0];

    // .cover _img
    // .description _string
    // .equipments _[string]
    // .host _{name,picture}
    // .id _string
    // .location _string
    // .pictures _[img]
    // .rating _int
    // .tags _[string]

    return (
        <div className='container'>
            <Header />
            <Slider images={logementInfo.pictures} />
            <div className='first-container'>
                <div className='lodging-header'>
                    <div className='lodging-info'>
                        <h2>{logementInfo.title}</h2>
                        <span>{logementInfo.location}</span>
                    </div>
                </div>
                <div className='lodging-landlord'>
                    <span className='landlord-name'>{logementInfo.host.name}</span>
                    <img className='landlord-img' alt='Tête du proprio' src={logementInfo.host.picture}/>
                </div>
            </div>
            <div className='second-container'>
                <div className='tag-container'>
                    {logementInfo.tags.map( (tag, index) => (
                        <Tag key={tag+index} content={tag}/>
                    ))}
                </div>
                <div className='rating-container'>
                    <Rating rating={logementInfo.rating}/>
                </div>
            </div>
            <div className='desc-container'>
                <Dropdown size='medium' title='description'>
                    <div>
                        <span>{logementInfo.description}</span>
                    </div>
                </Dropdown>
                <Dropdown size='medium' title='equipements'>
                    <div>
                        {logementInfo.equipments.map( (equipment, index) => (
                            <li key={equipment+index}>{equipment}</li>
                        ))}
                    </div>
                </Dropdown>
            </div>
            <Footer />
        </div>
    )
}

export default Logement