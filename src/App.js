
//add router package
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//add pages
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

//add navigation component for router
import Layout from './pages/Layout';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index path='/' element={<Home />} />
                        <Route path='blogs' element={<Blogs />} />
                        <Route path='Contact' element={<Contact />} />
                        <Route path='*' element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App