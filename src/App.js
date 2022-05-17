import Todos from './components/todos/Todos';
import { useState } from 'react';


const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(['todos1', 'todos2']);

    const increment = () => {
        setCount((e) => e + 1);
        
    }

    const getTodos = () => {
        setTodos((values) => [...values, 'todos3', 'todos 4'])
    }

    return(
        <>
            <Todos todos={todos}/>
            <hr />
            <div>
                count: {count}
                <button onClick={increment} >+</button>
                <button onClick={getTodos}>todos action</button>
            </div>

        </>
    )
}

export default App;