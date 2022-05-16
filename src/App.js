
//import Router Package
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

//add Pages
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

//import style
import './App.scss';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Link className='link' to='/home'>Home</Link>
        <Link className='link' to='/blogs'>Blogs</Link>
        <Link className='link' to='/contact'>Contact</Link>
        <Link className='link' to='/layout'>Layout</Link>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/layout' element={<Layout />} />
          <Route element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;