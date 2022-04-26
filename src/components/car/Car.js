import React from 'react';

class Car extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <div>this name of the car is: {this.props.title} and color is: {this.props.color}</div>
        )
    }
}

export default Car;