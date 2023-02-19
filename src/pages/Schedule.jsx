import React from "react";
import "../scss/Schedule.scss";
import Game from "../components/Game";

const Schedule = ({ team }) => {
  return (
    <div className="schedule">
      <h1 className="schedule__heading">Schedule</h1>
      <div className="schedule__line-divide"></div>
      {team.games.map((item) => {
        return (
          <Game
            key={item.id}
            location={item.location}
            date={item.date}
            time={item.time}
            homeTeam={item.home_team}
            awayTeam={item.away_team}
            team={team}
          />
        );
      })}
    </div>
  );
};

export default Schedule;
