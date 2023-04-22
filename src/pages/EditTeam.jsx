import "../scss/Index.scss";
import { useState } from "react";
import { getUserFromToken } from "../services/tokenService";
import { useNavigate } from "react-router";
import EditTeamWindow from "../components/EditTeamWindow";

const Index = ({ data, getData }) => {
  const navigate = useNavigate();
  const [toggleEdit, setToggleEdit] = useState(true);

  const loaded = () => {
    let team = data.data;
    let players = data.players;

    let activeCount = 0;
    let inactiveCount = 0;
    let irCount = 0;

    for (let i = 0; i < players.length; i++) {
      if (players[i].status === "Active") {
        activeCount++;
      }
      if (players[i].status === "Inactive") {
        inactiveCount++;
      }
      if (players[i].status === "IR") {
        irCount++;
      }
    }
    console.log(team[0]);

    return (
      <div className="index">
        {toggleEdit ? (
          <EditTeamWindow
            data={data}
            getData={getData}
            setToggleEdit={setToggleEdit}
          />
        ) : (
          <div></div>
        )}

        <h1 className="index__heading">
          {team[0].city} {team[0].mascot}{" "}
        </h1>
        <div className="index__line-divide"></div>
        <div
          className="index__container"
          style={{ borderLeft: `10px solid ${team[0].team_color}` }}
        >
          {/* <div className="index__game">
            <div className="index__subtitle">Upcoming game</div>
            <div className="index__game-matchup">away_team @ home_team</div>
            <div className="index__game-datetime">date time</div>
          </div> */}
          <div className="index__subtitle">Roster</div>
          <div className="index__roster">
            <div className="index__roster-status">
              <span className="index__roster-status-title">Active</span>
              <span className="index__roster-status-num">{activeCount}</span>
            </div>
            <div className="index__roster-status">
              <span className="index__roster-status-title">Inactive</span>
              <span className="index__roster-status-num">{inactiveCount}</span>
            </div>
            <div className="index__roster-status">
              <span className="index__roster-status-title">
                Injured Reserve
              </span>
              <span className="index__roster-status-num">{irCount}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const loading = () => {
    <div className="loading">Loading...</div>;
  };
  return <div>{data ? loaded() : loading()}</div>;
};

export default Index;
