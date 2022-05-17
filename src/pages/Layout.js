import { Outlet, Link } from 'react-router-dom';

//import style
import './Layout.scss';

const Layout = () => {
    return (
        <>
            <ul>
                <li>
                    <Link className="link" to='/'>Home</Link>
                </li>
                <li>
                    <Link className='link' to='blogs'>Blogs</Link>
                </li>
                <li>
                    <Link className='link' to="contact" >Contact</Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default Layout;