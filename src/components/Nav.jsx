import "../scss/Nav.scss";
import { Link } from "react-router-dom";
import { getUserFromToken } from "../services/tokenService";
const user = getUserFromToken();

const Nav = ({ data, handleLogout }) => {
  const loaded = () => {
    const teams = data.data;
    const userTeam = teams.filter((team) => team.user === user._id);

    return (
      <div className="nav">
        <div className="nav__main-links">
          {data ? (
            <Link to="/edit-team">
              <img
                className="nav__logo"
                src={userTeam[0].logo_url}
                alt={`${userTeam[0].city} ${userTeam[0].mascot}`}
              />
            </Link>
          ) : (
            <div></div>
          )}
          <Link className="nav__link" to="/">
            {data ? (
              <span>
                {userTeam[0].city} {userTeam[0].mascot}
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

  const loading = () => {
    return <div></div>;
  };

  return <div>{data ? loaded() : loading()}</div>;
};

export default Nav;
