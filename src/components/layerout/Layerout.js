import { Outlet, Link } from 'react-router-dom';

//add style
import './Layerout.scss';

const Layerout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link className="link" to='/' >Home</Link>
                    </li>
                    <li>
                        <Link className="link" to='blogs' >Blogs</Link>
                    </li>
                    <li>
                        <Link className='link' to='contact' >Contact</Link>
                    </li>
                    <li>
                        <Link className='link' to='about' >About</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layerout;