const Product = ({id, title, onDelete}) => {
    return (
        <>
            <li>
                the name is : {title} wiht id : {id}
                <button onClick={() => onDelete(id)}>Delete This</button>
            </li>
        </>
    )
}

export default Product;