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
          <NavLink to="/">Class</NavLink>
          <NavLink to="/">Hom</NavLink>
          <NavLink to="/login">Login</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
