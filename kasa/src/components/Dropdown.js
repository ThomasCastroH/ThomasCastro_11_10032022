import { useState } from "react";
import '../styles/Dropdown.css'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

function Dropdown(props) {
    const [visible, setVisible] = useState(true);
    const size = props.size;
    const title = props.title;
    
    return (
        <div className={'dropdown-container '+ size + ' ' + title}>
            <button className="dropdown-button" onClick={() => setVisible(!visible)}>
                <div className="dropdown-button-content">
                    <span className="dropdown-button-text">{title.charAt(0).toUpperCase()+title.slice(1)}</span>
                    {visible ? <RiArrowUpSLine className="dropdown-arrow"/> : <RiArrowDownSLine className="dropdown-arrow"/>}
                </div>
            </button>
            {visible && <div className="dropdown-content">{props.children}</div>}
        </div>
    )
}

export default Dropdown