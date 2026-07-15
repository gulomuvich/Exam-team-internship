import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import Products from "../../page/Products";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <Link>
      <nav className="nav-list">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>

          <Link className="nav-text" to={"/Dashboard"}>Dashboard</Link> 
        </Link>

        <Link to={"/product"}>
          <span className="nav-text">Dashboard</span>
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
          <Link className="nav-text" to={"/products"}>Products</Link>
        </Link>
          <span className="nav-text">Products</span>
        </NavLink>

        <NavLink
          to="/categories"
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          {/* <Link className="nav-text" to={}>Categories</Link> */}
        </li>
      </ul>
          <span className="nav-text">Categories</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;