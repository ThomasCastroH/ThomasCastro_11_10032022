import { useState } from "react";

function Dropdown(props) {
    const [visible, setVisible] = useState(true);
    const size = props.size;
    const title = props.title;
    
    return (
        <div className={'dropdown-container '+ size + ' ' + title}>
            <button className="dropdown-button" onClick={() => setVisible(!visible)}>{title.charAt(0).toUpperCase()+title.slice(1)}</button>
            {visible && <div className="dropdown-content">{props.children}</div>}
        </div>
    )
}

export default Dropdown