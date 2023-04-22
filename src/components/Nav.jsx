import "../scss/Nav.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { getUserFromToken } from "../services/tokenService";
// const user = getUserFromToken();

const Nav = ({ data }) => {
  const loaded = () => {
    const team = data.data;

    return (
      <div className="nav">
        <div className="nav__main-links">
          <div>
            <div>
              <img
                className="nav__logo"
                src={team[0].logo_url}
                alt={team[0].mascot}
              />
              <Link className="nav__link" to="/team">
                <span>{`${team[0].city} ${team[0].mascot}`}</span>
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
              <Link to="/team">
                <span className="nav__logout nav__link">Sign Out</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1 className="nav"></h1>;
  };
  return data ? loaded() : loading();
};

export default Nav;
