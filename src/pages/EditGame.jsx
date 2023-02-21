import React from "react";
import { useState, useEffect } from "react";
import "../scss/EditGame.scss";
import { useNavigate, useParams } from "react-router";

const GameEdit = ({ team, getTeam }) => {
  const URL = "http://localhost:8000/manager/game/";

  const { id } = useParams();
  const navigate = useNavigate();
  const game = team.games.find((game) => game.id === +id);
  const [editForm, setEditForm] = useState(game);
  console.log(game);

  async function updateGame(form, id) {
    await fetch(`${URL}${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    getTeam();
  }
  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateGame(editForm, id);
    navigate("/schedule");
  }

  const loaded = () => {
    return (
      <div
        className="gameShow"
        style={{ borderLeft: `10px solid ${team.team_color}` }}
      >
        <h1 className="gameShow__heading">Edit Game</h1>
        <div className="gameShow__line-divide"></div>
        <form onSubmit={handleSubmit}>
          <div className="game__time">
            <input
              onChange={handleChange}
              value={editForm.date}
              className="game__input"
              type="date"
              name="date"
              size="11"
            />
            <input
              onChange={handleChange}
              value={editForm.time}
              className="game__input"
              type="text"
              name="time"
              size="11"
            />
          </div>
          <div className="game__matchup">
            <input
              onChange={handleChange}
              value={editForm.away_team}
              className="game__input"
              type="text"
              name="away_team"
              size="11"
            />
            @
            <input
              onChange={handleChange}
              value={editForm.home_team}
              className="game__input"
              type="text"
              name="home_team"
              size="11"
            />
          </div>
          <div className="game__location">
            <input
              onChange={handleChange}
              value={editForm.location}
              className="game__input"
              type="text"
              name="location"
              size="20"
            />
          </div>
          <button className="game__submit">Submit</button>
        </form>
      </div>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return <div>{team ? loaded() : loading()}</div>;
};

export default GameEdit;
