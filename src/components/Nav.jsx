import "../scss/Nav.scss";
import { Link, useNavigate } from "react-router-dom";
import Roster from "../pages/Roster";
import Schedule from "../pages/Schedule";
import Recruitment from "../pages/Recruitment";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__main-links">
        <div className="nav__logo"></div>
        <Link className="nav__link" to="/">
          <span>Team Summary</span>
        </Link>
        <Link className="nav__link" to="/roster">
          <span>Roster</span>
        </Link>
        <Link className="nav__link" to="/schedule">
          <span>Schedule</span>
        </Link>
        <Link className="nav__link" to="/recruitment">
          <span>Recruitment</span>
        </Link>
      </div>
      <Link to="/login">
        <span className="nav__logout nav__link">Sign Out</span>
      </Link>
    </div>
  );
};

export default Nav;
