import React from 'react';
import Car from '../car/Car';

class Garage extends React.Component {
    render(){
        return (
            <div>
                <Car title="BMW" color="Red"/>
                <Car title="Fiat" color="Blue" />
                <Car title="Ford" color="Yellow" />
            </div>
        )
    }
}

export default Garage;