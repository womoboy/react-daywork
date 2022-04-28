const Product = (props) => {

    return(
        <>
            <li>
                name product is : {props.title}
                <button onClick={()=>{props.onDelete(props.id)}}>Delete this</button>
            </li>
        </>
    )
}

export default Product;