const Product = ({title, id, onDelete}) => {
    return (
        <>
            <li>
                the name is {title} with id {id}
                <button onClick={() => onDelete(id)}>Delete item</button>
            </li>
        </>
    )
}

export default Product;