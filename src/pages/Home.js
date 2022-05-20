import React, { useContext } from 'react';
import { UserContext } from '../App';
import { Login } from '../unit/Login';


const Home = () => {

    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <h2>this is Home page</h2>
            <pre>the use is : {JSON.stringify(user, null, 2)} </pre>
            {user ? <button onClick={() => {
                setUser(null);
            }}>Logout</button> : <button onClick={ async () => {
                const user = await Login();
                setUser(user);
            }}>Login</button>}
        </>
    )
}

export default Home;