import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World !</h1>
      <p>this text is for test</p>
      <div id="content">{getCar(car)}</div>
    </div>
  );
}

const car = {
  name: "Ford",
  model: "Mustang",
  year: 2014
};

function getCar({name, model, year}){
  return name + " / " + model + " / " + year;
}

export default App;

