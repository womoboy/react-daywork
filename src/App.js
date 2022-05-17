import { BrowserRouter, Route, Routes } from 'react-router-dom'; //add router package

//import pages
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='blogs' element={<Blogs />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='*' element={<NoPage />} /> 
                    </Route>       
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App