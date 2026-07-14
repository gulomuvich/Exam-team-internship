import "./Header.css"
import Logo from "../../assets/icon/logo.png"
import Img from "../../assets/img/avatar.png"

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <img src={Logo} alt="Modernize Logo" className="logo-img" />
          <span className="logo-text">Modernize</span>
        </div>
      </div>
      
      <div className="header-middle">
        <div className="search-container">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      <div className="header-right">
        <div className="profile-container">
          <img src={Img} alt="User Avatar" className="avatar-img" />
          <span className="profile-name">X'eriya Ponald</span>
        </div>
      </div>
    </header>
  )
}

export default Header
