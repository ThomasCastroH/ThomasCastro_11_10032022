
function Dropdown(props) {
    const size = props.size;
    const content = props.content
    
    return (
        <span className={size + ' ' +content}> </span>
    )
}

export default Dropdown