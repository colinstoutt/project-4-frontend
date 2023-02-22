import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../scss/EditPlayer.scss";

const EditPlayer = ({ team, getTeam }) => {
  const URL = "http://localhost:8000/manager/player/";

  const { id } = useParams();
  const navigate = useNavigate();
  const player = team.players.find((player) => player.id === +id);
  const [editForm, setEditForm] = useState(player);
  console.log(player, id);

  async function updatePlayer(form, id) {
    await fetch(`${URL}${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    getTeam();
  }
  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlayer(editForm, id);
    navigate("/roster");
  };

  const loaded = () => {
    return (
      <div className="playerShow">
        <h1 className="playerShow__heading">Edit Player</h1>
        <div className="playerShow__line-divide"></div>
        <div
          className="playerShow__recruit-container"
          style={{ borderLeft: `10px solid ${team.team_color}` }}
        >
          <div className="playerShow__name">
            {player.first_name} {player.last_name}
          </div>
          <form onSubmit={handleSubmit}>
            <label className="playerShow__label" htmlFor="number">
              Number
            </label>
            <br />
            <input
              className="playerShow__input"
              onChange={handleChange}
              type="text"
              name="number"
              value={editForm.number}
              size="25"
            />
            <br />
            <label className="playerShow__label" htmlFor="position">
              Position
            </label>
            <br />
            <input
              className="playerShow__input"
              onChange={handleChange}
              type="text"
              name="position"
              value={editForm.position}
              size="25"
            />
            <br />

            <label className="playerShow__label" htmlFor="age">
              Age
            </label>
            <br />
            <input
              className="playerShow__input"
              onChange={handleChange}
              type="text"
              name="age"
              value={editForm.age}
              size="25"
            />
            <br />

            <label className="playerShow__label" htmlFor="contact">
              Contact
            </label>
            <br />
            <input
              className="playerShow__input"
              onChange={handleChange}
              type="text"
              name="contact"
              value={editForm.contact}
              size="25"
            />
            <br />

            <label className="playerShow__label" htmlFor="status">
              Status
            </label>
            <br />
            <select
              className="playerAdd__input"
              name="status"
              onChange={handleChange}
              value={editForm.status}
            >
              <option value="">Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="IR">IR</option>
            </select>
            <br />
            <button type="submit" className="playerShow__submit">
              Submit
            </button>
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

export default EditPlayer;
