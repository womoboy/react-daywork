
import Garage from './components/garage/Garage';

function App(props){
    return (
        <>
            <Garage cars={props.cars}/>
        </>
    )
}

export default App;