import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>Modernize</h3>
      </div>

      <ul className="nav-list">
        <li className="active">
          <span>📊</span>
          Dashboard
        </li>

        <li>
          <span>📦</span>
          Products
        </li>

        <li>
          <span>📂</span>
          Categories
        </li>
      </ul>
    </div>
  );
};

export default Navbar;