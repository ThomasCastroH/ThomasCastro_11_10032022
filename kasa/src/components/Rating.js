function Rating(props) {
    const rating = props.rating

    return (
        <div>
            <span>Noté {rating} / 5</span>
        </div>
    )
}

export default Rating