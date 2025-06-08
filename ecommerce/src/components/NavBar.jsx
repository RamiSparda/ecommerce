import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';


function NavBar() {
  return (
<nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="nav-links">
        <Link to="/category/remeras">Remeras</Link>
        <Link to="/category/pantalones">Pantalones</Link>
        <Link to="/category/camperas">Camperas</Link>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;