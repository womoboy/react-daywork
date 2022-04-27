import React from 'react';
import Car from '../car/Car';

class Garage extends React.Component {
    render(){
        return (
            <>
                <Car carid="1" color="Red" carName="BMW" />
                <Car carid="2" color="Black" carName="Ford" />
                <Car carid="3" color="DarkBlue" carName="Fiat" />
            </>
        )
    }
}

export default Garage;