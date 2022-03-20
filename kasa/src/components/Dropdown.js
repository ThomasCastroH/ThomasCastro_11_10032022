import { useState } from "react";

function Dropdown(props) {
    const [visible, setVisible] = useState(true);
    const size = props.size;
    const content = props.content;
    
    return (
        <div>
            <button className={'dropdown-button '+ size + ' ' + content} onClick={() => setVisible(!visible)}>{content.charAt(0).toUpperCase()+content.slice(1)}</button>
            {visible && <div className="dropdown-content">{props.children}</div>}
        </div>
    )
}

export default Dropdown