
import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const ShowInfoC = () => {

    const {user, setValue} = useContext(UserContext);

    return (
        <>
            <p>this is the show info C the user is : </p>
            <div>{user}</div>
        </>
    )
}

export default ShowInfoC;