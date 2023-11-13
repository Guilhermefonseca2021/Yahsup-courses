import { NavLink } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Header() {
  const [search, setSearch] = useState<string>();
  const history = useNavigate();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    history(`/search/${search}`);
  }

  return (
    <div className="header">
      <h2>
        <NavLink to="/">
          <FaBeer />
        </NavLink>
      </h2>

      <div className="navbar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div>
          <ul>
            <NavLink to="/watch" className="nav-item">
              Class
            </NavLink>
            <NavLink to="/" className="nav-item">
              Hom
            </NavLink>
            <NavLink to="/login" className="nav-item">
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
