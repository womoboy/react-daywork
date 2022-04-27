function Garage(props){
    return(
        <>
            <h2>Garage</h2>
            {props.cars.length > 0 &&
                <p>You have {props.cars.length} cars in the garage.</p>
            }
        </>
    )
}

export default Garage;