import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className='navbar-brand'>
            <Link to="/">Game App</Link>
            <div className='navbar-links'>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/favorites" className='nav-link'>Favorites</Link>
            </div>

        </nav>
    )
}
