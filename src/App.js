import React, { createContext, useState, useMemo } from "react";

//import router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";

//create context
export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <>
      <UserContext.Provider value={ value }>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;
