import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Createblog from './pages/Createblog';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route index path='/' element={<Home />}/>
                    <Route path='/createblog' element={<Createblog />}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;