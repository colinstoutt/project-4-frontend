import React from "react";
import { useState } from "react";
import "../scss/Game.scss";
import { useNavigate } from "react-router";

const GameEdit = (props) => {
  const navigate = useNavigate();
  const URL = "http://localhost:8000/manager/game/";
  const [gameForm, setGameForm] = useState({
    location: "",
    date: "",
    time: "",
    home_team: "",
    away_team: "",
    team_id: 12,
  });

  async function updateGame(form, id) {
    await fetch(`${URL}${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    props.getTeam();
  }

  function handleChange(e) {
    setGameForm({
      ...gameForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleUpdate(e) {
    e.preventDefault();
    updateGame(gameForm, props.id);
    setGameForm({
      location: "",
      date: "",
      time: "",
      home_team: "",
      away_team: "",
      team_id: 12,
    });
    navigate("/schedule");
  }
  return (
    <div
      className="game"
      style={{ borderLeft: `10px solid ${props.team.team_color}` }}
    >
      <form onSubmit={() => handleUpdate}>
        <div className="game__time">
          <input
            onChange={handleChange}
            value={gameForm.date}
            className="game__input"
            type="date"
            name="date"
            placeholder={props.date}
            size="11"
          />
          <input
            onChange={handleChange}
            value={gameForm.time}
            className="game__input"
            type="text"
            name="time"
            placeholder={props.time}
            size="11"
          />
        </div>
        <div className="game__matchup">
          <input
            onChange={handleChange}
            value={gameForm.away_team}
            className="game__input"
            type="text"
            name="away_team"
            placeholder={props.awayTeam}
            size="11"
          />
          @
          <input
            onChange={handleChange}
            value={gameForm.home_team}
            className="game__input"
            type="text"
            name="home_team"
            placeholder={props.homeTeam}
            size="11"
          />
        </div>
        <div className="game__location">
          <input
            onChange={handleChange}
            value={gameForm.location}
            className="game__input"
            type="text"
            name="location"
            placeholder={props.location}
            size="20"
          />
        </div>
        <button className="game__submit" onClick={useNavigate("/schedule")}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default GameEdit;
