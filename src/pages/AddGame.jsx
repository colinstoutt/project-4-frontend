import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../scss/Game.scss";
import { useNavigate } from "react-router-dom";

const ScheduleEdit = ({ team, getTeam }) => {
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
  async function createGame(form) {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    getTeam();
  }
  function handleChange(e) {
    setGameForm({
      ...gameForm,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    createGame(gameForm);
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

  const loaded = () => {
    return (
      <div className="schedule">
        <h1 className="schedule__heading">
          <Link className="schedule__heading-link" to="/schedule">
            Add Game
          </Link>
        </h1>

        <div className="schedule__line-divide"></div>
        {/* {team.games.map((item) => {
          return (
            <GameEdit
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
        })} */}
        <div
          className="game"
          style={{ borderLeft: `10px solid ${team.team_color}` }}
        >
          <form onSubmit={handleSubmit}>
            <div className="game__time">
              <input
                onChange={handleChange}
                value={gameForm.date}
                className="game__input"
                type="date"
                name="date"
                placeholder="mm-dd-yyyy"
                size="11"
              />
              <input
                onChange={handleChange}
                value={gameForm.time}
                className="game__input"
                type="text"
                name="time"
                placeholder="7:00 PM"
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
                placeholder="Away"
                size="11"
              />
              @
              <input
                onChange={handleChange}
                value={gameForm.home_team}
                className="game__input"
                type="text"
                name="home_team"
                placeholder="Home"
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
                placeholder="Location"
                size="20"
              />
            </div>
            <button className="game__submit">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return <div>{team ? loaded() : loading()}</div>;
};

export default ScheduleEdit;
