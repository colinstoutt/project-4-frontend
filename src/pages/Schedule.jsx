import React from "react";
import "../scss/Schedule.scss";
import Game from "../components/Game";
import { Link } from "react-router-dom";

const Schedule = ({ team, getTeam }) => {
  const loaded = () => {
    return (
      <div className="schedule">
        <div className="schedule__heading-container">
          <h1 className="schedule__heading">Schedule</h1>
          <Link to="/schedule/add">
            <button className="add-button">Add Game</button>
          </Link>
        </div>
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
