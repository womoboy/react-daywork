const Product = (props) => {
    const showConsole = () => {
        console.log(`name ${props.title} and id : ${props.id}`)
    }

    return(
        <>
            <li>
                name product is : {props.title} with id : {props.id}
                <button onClick={showConsole}>Show in the Console</button>
            </li>
        </>
    )
}

export default Product;