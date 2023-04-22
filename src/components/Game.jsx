import React from "react";
import "../scss/Game.scss";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
// import { getUserFromToken } from "../services/tokenService";
// const user = getUserFromToken();

const Game = (props) => {
  const team = props.data.data;
  const navigate = useNavigate();
  const URL = "http://localhost:3002/manager/game/";
  async function deleteGame(id) {
    await fetch(`${URL}${id}/`, { method: "DELETE" });
    props.getData();
    navigate("/schedule");
  }

  return (
    <div
      className="game"
      style={{ borderLeft: `10px solid ${team[0].team_color}` }}
    >
      <div className="game__time">
        {props.date.slice(0, 10)} at{" "}
        <span className="game__time-time">{props.time}</span>
      </div>
      <div className="game__matchup">
        <h1>
          {props.awayTeam} @ {props.homeTeam}{" "}
          <Link to={`/schedule/${props.id}/`}>
            <EditIcon
              onClick={() => props.setToggleEditGame(true)}
              className="edit-icon"
              sx={{
                fontSize: "1rem",
                marginLeft: "-0.1rem",
              }}
            />
          </Link>
        </h1>
      </div>
      <div className="game__location-del">
        <div className="game__location">
          {props.location} | {props.address}
        </div>
        <button onClick={() => deleteGame(props.id)} className="game__delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Game;
