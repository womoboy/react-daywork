import React, { useContext } from 'react';
import { UserContext } from '../App';

const Home = () => {

    const userObj = useContext(UserContext);

    const handlerUser = () => {
        userObj.setUser((prevValues) => {
            return (
                {...prevValues, firstName: 'Aria', lastName: 'Atabak'}
            )
        });
    }

    return (
        
        <>
            <h2>This is the Home Component</h2>
            <p>the user is : { userObj.user.firstName + ' ' + userObj.user.lastName } </p>
            <button onClick={ handlerUser }>Change User</button>
        </>
    )
}

export default Home;