import { useState, createContext } from "react";
import ComponentChild1 from "./components/componentChild1/ComponentChild1";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState("Aria");

  return (
    <div className="app">
      <UserContext.Provider value={user}>
        <ComponentChild1 />
      </UserContext.Provider>
    </div>
  );
};

export default App;
