import Car from '../car/Car';
import './Garage.scss';

const Garage = () => {
    return (
        <div className='garage-cars'>
            <div><Car title="BMW"/></div>
            <div><Car title="Volvo"/></div>
            <div><Car title="Fiat"/></div>
        </div>
    )
}

export default Garage;