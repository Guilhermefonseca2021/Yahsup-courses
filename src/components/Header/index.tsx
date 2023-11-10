import {} from "react-router";
import { NavLink } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import "./styles.css";

export default function Header() {
  return (
    <div className="header">
      <h2>
        <NavLink to="/">
          <FaBeer />
        </NavLink>
      </h2>

      <div className="navbar">
        <form action="">
          <input type="text" placeholder="search" />
        </form>
        <div>
          <ul>
          <NavLink to="/" className='nav-item'>Class</NavLink>
          <NavLink to="/" className='nav-item'>Hom</NavLink>
          <NavLink to="/login" className='nav-item'>Login</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
