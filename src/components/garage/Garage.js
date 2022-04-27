import Car from '../car/Car';

const Garage = (props) => {
    return (
        <>
            <ul>
                {props.cars.map((car)=>{return <Car id={car.id} key={car.id} brand={car.title}/>})}
            </ul>
        </>
    )
}

export default Garage;