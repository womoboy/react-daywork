import React, { useState, createContext, useMemo } from 'react';

//import reset style
import './App.scss';

//call the router package
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import layer out
import Layerout from './components/layerout/Layerout';

//import pages
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import About from './pages/About';
import NoPage from './pages/NoPage';


//create context
export const UserContext = createContext();

const App = () => {
    //useState
    const [user, setUser] = useState(null);

    //add memo for performance
    const provideUser = useMemo(() => ({user,setUser}), [user, setUser]);

    return (
        <>
            <UserContext.Provider value={ provideUser }>
                <Router>
                    <Routes>
                        <Route path='/' element={<Layerout />}>
                            <Route index element={<Home />}/>
                            <Route path='blogs' element={<Blogs />} />
                            <Route path='contact' element={<Contact />} />
                            <Route path='about' element={<About />} />
                            <Route path='*' element={<NoPage />} />
                        </Route>
                    </Routes>
                </Router>
            </UserContext.Provider>
            

        </>
    )
}

export default App;