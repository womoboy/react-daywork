import { Outlet,Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>The test blog</h2>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/create'>Create</Link>
            </div>
            <Outlet />
        </div>
    )
}
 
export default Navbar;