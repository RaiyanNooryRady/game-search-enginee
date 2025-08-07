import { Link } from 'react-router-dom'
import '../css/Navbar.css'
export const NavBar = () => {
    return (
        <nav className='navbar px-4 fixed-top'>
            <div className='navbar-brand'>
                <Link to="/" className='nav-link link-light'>Game App</Link>
            </div>
            <div className='navbar-links'>
                <Link to="/" className='nav-link link-light'>Home</Link>
                <Link to="/favorites" className='nav-link link-light'>Favorites</Link>
            </div>

        </nav>
    )
}
