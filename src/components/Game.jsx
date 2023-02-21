import React from "react";
import "../scss/Game.scss";
import { useNavigate } from "react-router";

const Game = (props) => {
  const navigate = useNavigate();
  const URL = "http://localhost:8000/manager/game/";
  async function deleteGame(id) {
    await fetch(`${URL}${id}/`, { method: "DELETE" });
    console.log(id);
    props.getTeam();
    navigate("/schedule");
  }

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
      <div className="game__location-del">
        <div className="game__location">{props.location}</div>
        <button onClick={() => deleteGame(props.id)} className="game__delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Game;
