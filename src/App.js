import React from 'react';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {favoritcolor: 'Black'};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({favoritcolor: 'Red'});
        }, 1000);
    }

    componentDidUpdate() {
        document.getElementById('showColor').innerHTML = this.state.favoritcolor;
    }
    
    render() {
        return (
            <>
                <p id='showColor'>the color is : {this.state.favoritcolor}</p>
            </>
        )
    }
}

export default App;