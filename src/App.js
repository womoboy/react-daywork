import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import NoPage from './pages/NoPage';
import BlogDetails from './pages/BlogDetails';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route index path='/' element={<Home />}/>
                        <Route path='/create' element={<Create />}/>
                        <Route path='/blogs/:id' element={<BlogDetails />} />
                        <Route path='*' element={<NoPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;