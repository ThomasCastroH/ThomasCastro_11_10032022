import Dropdown from './Dropdown'
import Tag from './Tag'
import Header from './Header'
import Rating from './Rating';
import { useParams } from 'react-router-dom';

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
    // .picture _[img]
    // .rating _int
    // .tags _[string]

    return (
        <div>
            <Header />
            <img className="lodging-cover" alt="Lodging Cover" src={logementInfo.cover}/> {/* carroussel */}
            <div className='lodging-header'>
                <div className='logding-info'>
                    <h2>{logementInfo.title}</h2>
                    <span>{logementInfo.location}</span>
                </div>
            </div>
            <div className='lodging-landlord'>
                <span className='landlord-name'>{logementInfo.host.name}</span>
                <img className='landlord-img' alt='Tête du proprio' src={logementInfo.host.picture}/>
            </div>
            <div className='tag-container'>
                {logementInfo.tags.map( (tag, index) => (
                    <Tag key={tag+index} content={tag}/>
                ))}
            </div>
            <div className='rating-container'>
                <Rating rating={logementInfo.rating}/>
            </div>
            <div className='desc-container'>
                <Dropdown size='medium' content='description'>
                    <span>{logementInfo.description}</span>
                </Dropdown>
                <Dropdown size='medium' content='equipements'>
                    {logementInfo.equipments.map( (equipment, index) => (
                        <li key={equipment+index}>{equipment}</li>
                    ))}
                </Dropdown>
            </div>
        </div>
    )
}

export default Logement