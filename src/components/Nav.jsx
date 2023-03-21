import "../scss/Nav.scss";
import { Link, useNavigate } from "react-router-dom";
import Roster from "../pages/Roster";
import Schedule from "../pages/Schedule";
import Recruitment from "../pages/Recruitment";

const Nav = ({ data, handleLogout }) => {
  console.log(data);
  return (
    <div className="nav">
      <div className="nav__main-links">
        {data ? (
          <Link to="/edit-team">
            <img
              className="nav__logo"
              src={data.data[0].logo_url}
              alt={data.data[0].mascot}
            />
          </Link>
        ) : (
          <div></div>
        )}
        <Link className="nav__link" to="/">
          {data ? (
            <span>
              {data.data[0].city} {data.data[0].mascot}
            </span>
          ) : (
            <div>Team Summary</div>
          )}
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
        <Link to="/login">
          <span
            className="nav__logout nav__link"
            onClick={() => handleLogout()}
          >
            Sign Out
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
