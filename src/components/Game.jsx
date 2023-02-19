import React from "react";
import "../scss/Game.scss";

const Game = (props) => {
  return (
    <div
      className="game"
      style={{ borderLeft: `10px solid ${props.team.team_color}` }}
    >
      <div className="game__time">
        {props.date} at {props.time}
      </div>
      <div className="game__matchup">
        <h1>
          {props.awayTeam} @ {props.homeTeam}
        </h1>
      </div>
      <div className="game__location">{props.location}</div>
    </div>
  );
};

export default Game;
