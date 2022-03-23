import '../styles/Tag.css'

function Tag(props) {
    const content = props.content
    
    return (
        <span className="tag">{content}</span>
    )
}

export default Tag