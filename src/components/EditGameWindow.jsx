import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../scss/AddPlayerWindow.scss";

const EditPlayerWindow = ({ userTeam, data, getData, setToggleEditGame }) => {
  const URL = "http://localhost:3002/manager/game/";
  const { id } = useParams();
  const navigate = useNavigate();
  const game = data && data.games.find((game) => game._id === id);
  const [editForm, setEditForm] = useState(game);
  console.log(game, id);

  async function updateGame(form, id) {
    await fetch(`${URL}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    getData();
  }
  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateGame(editForm, id);
    navigate("/schedule");
  };

  const handleCancel = () => {
    navigate("/schedule");
    setToggleEditGame(false);
  };

  return (
    <div
      className="gameAdd"
      style={{
        borderLeft: `10px solid ${userTeam[0].team_color}`,
      }}
    >
      <h1 className="gameAdd__heading">Edit Game</h1>
      <div className="gameAdd__line-divide"></div>
      <div className="gameAdd__container">
        <form onSubmit={handleSubmit}>
          <div className="game__time">
            <input
              onChange={handleChange}
              value={editForm.date}
              required
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
              value={editForm.awayTeam}
              className="game__input"
              type="text"
              name="awayTeam"
              size="11"
            />
            @
            <input
              onChange={handleChange}
              value={editForm.homeTeam}
              className="game__input"
              type="text"
              name="homeTeam"
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
            <input
              onChange={handleChange}
              value={editForm.address}
              className="game__input"
              type="text"
              name="address"
              size="20"
            />
          </div>
          <button className="game__submit">Submit</button>
          <button onClick={handleCancel} className="playerAdd__cancel">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPlayerWindow;
