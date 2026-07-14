import "./Header.css"
import Logo from "../../assets/icon/logo.png"
import Img from "../../assets/img/avatar.png"
function Header() {
  return (
    <div>
      <ul>
        <li>
            <img src={Logo} alt="" />
        </li>
        <li>
            <input type="Search..." placeholder="Search..." />
        </li>
        <li>
            <img src={Img} alt="" />
        </li>
      </ul>
    </div>
  )
}

export default Header
