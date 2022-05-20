import { Link,Outlet  } from 'react-router-dom';

//import style
import './Layout.scss';

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='link' to='blogs' >Blogs</Link>
                    </li>
                    <li>
                        <Link className="link" to='about' >About</Link>
                    </li>
                    <li>
                        <Link className='link' to='contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            
            <Outlet />
        </>
        
    )
}

export default Layout;