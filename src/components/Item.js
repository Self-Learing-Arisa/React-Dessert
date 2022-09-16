function Item(props) {
    const {dessert, openPopup} = props
    return (
        <div className="item" onClick={() => openPopup(dessert)}>
            <img src={dessert.imgUrl}  alt="" width="400" />
            <p>{dessert.title}</p>
        </div>
    )
}

export default Item