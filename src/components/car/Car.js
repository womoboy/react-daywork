import React from 'react';

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: this.props.color,
            carName: this.props.carName,
            carid: this.props.carid
        }
    }

    changeColor = ()=> {
        this.setState({color: "Notroni"});
    }
    
    render(){
        return (
            <>
                <p>the car name is : {this.state.carName}, with color : {this.state.color} and with id : {this.state.carid}</p>
                <button type='button' onClick={this.changeColor}>Change color</button>
            </>
        )
    }
}

export default Car;