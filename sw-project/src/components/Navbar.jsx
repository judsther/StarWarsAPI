import { Link } from 'react-router-dom'
import Swlogo from '../assets/images/Swlogo.png'
import './Navbar.css'

export const Navbar = () => {

  return (
    <>
    <nav className="navbar border-bottom border-body fixed-top navbar-expand-md navnav">
    <div className="container-fluid">

        <Link to='/' className="navbar-brand">
        <img src={Swlogo} alt="Logo" width="75" className="d-inline-block align-text-top" />
        </Link>
       
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link to='/' className="nav-link colortext">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/Characters' className="nav-link colortext">Characters</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link colortext">Movies</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link colortext">Planets</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link colortext">Starships</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link colortext">My Favorites</Link>
        </li>
      </ul>
    </div>
     </div>
    </nav>
      
    </>
  )
}