import Garage from './components/garage/Garage';

const cars = [
    {id: 1, title: "BMW"},
    {id: 2, title: "Volvo"},
    {id: 3, title: "Ford"},
    {id: 4, title: "Fiat"}
]

const App = () => {
    return (
        <>
            <Garage cars={cars}/>
        </>
    )
}

export default App;