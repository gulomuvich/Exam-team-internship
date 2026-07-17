import "./Dashboard.css";
import icon from "../../assets/icon/icon.png"
import market from "../../assets/icon/icon (1).png"
import puple from "../../assets/icon/icon (2).png"
import add from "../../assets/icon/icon (3).png"
import Dashbor from "../../assets/icon/Orders chart (1).png"
import last from "../../assets/icon/last 7 days.png"
import { Link } from "react-router-dom";
import prodo from "../../assets/icon/Top Products.png"

const Dashboard = () => {
return (
  <section>
    <ul className="doshbord-left">
      <li className="dosbord-list">
        <div>
          <h2 className="dashbord-title">
            $10.540
          </h2>
          <p className="deshbord-text">
            Total Revenue
          </p>
          <mark className="deshbord-mark">22.45% </mark>
        </div>
        <img src={icon} alt="" />
      </li>
       <li className="dosbord-list">
        <div>
          <h2>
            $10.540
          </h2>
          <p>
            Total Revenue
          </p>
          <mark className="deshbord-mark">22.45% </mark>
        </div>
        <img src={market} alt="" />
      </li>
       <li className="dosbord-list">
        <div>
          <h2>
            $10.540
          </h2>
          <p>
            Total Revenue
          </p>
          <mark>22.45% </mark>
        </div>
        <img src={puple} alt="" />
      </li>
       <li className="dosbord-list">
        <div>
          <h2>
            $10.540
          </h2>
          <p>
            Total Revenue
          </p>
          <mark className="">22.45% </mark>
        </div>
        <img src={add} alt="" />
      </li>
    </ul>
    <div className="last-img">
      <img src={Dashbor} alt="" />
      <img src={last} alt="" />
    </div>
    <div className="prodo-img">
      <Link to={"/products"} >
      <img src={prodo} alt="" />
      </Link>
    </div>
  </section>
)
};

export default Dashboard;
