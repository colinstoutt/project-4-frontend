import React from "react";
import "../scss/Schedule.scss";
import Game from "../components/Game";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const Schedule = ({ team, getTeam }) => {
  const loaded = () => {
    return (
      <div className="schedule">
        <h1 className="schedule__heading">
          Schedule
          <Link to="/edit-schedule">
            <EditIcon
              className="schedule__edit-icon"
              sx={{ fontSize: "1rem" }}
            />
          </Link>
        </h1>

        <div className="schedule__line-divide"></div>
        {team.games.map((item) => {
          return (
            <Game
              key={item.id}
              id={item.id}
              location={item.location}
              date={item.date}
              time={item.time}
              homeTeam={item.home_team}
              awayTeam={item.away_team}
              team={team}
              getTeam={getTeam}
            />
          );
        })}
      </div>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <div>{team ? loaded() : loading()}</div>;
};

export default Schedule;
