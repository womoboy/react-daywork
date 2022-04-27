import Garage from './components/garage/Garage';

const cars = [
    {id: 1, title: 'BMW'},
    {id: 2, title: 'Ford'},
    {id: 3, title: 'Volvo'}
]

const App = () => {
    return <Garage cars={cars}/>
}

export default App;