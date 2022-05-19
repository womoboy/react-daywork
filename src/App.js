import { useState } from 'react';

import ShowInfoA from './components/showinfoA/ShowInfoA'
import { UserContext } from './UserContext';

const App = () => {

    const [user, setUser] = useState('John Doe');

    return (
        <>
            <UserContext.Provider value={{user, setUser}}>
                <ShowInfoA />  
            </UserContext.Provider>
        </>
    )
}

export default App;