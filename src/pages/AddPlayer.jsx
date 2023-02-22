import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "../scss/AddPlayer.scss";

const AddPlayer = ({ team, getTeam }) => {
  const URL = "http://localhost:8000/manager/player/";
  const navigate = useNavigate();
  const [playerForm, setPlayerForm] = useState({
    first_name: "",
    last_name: "",
    contact: "",
    age: "",
    number: "",
    position: "",
    status: "",
    team_id: 12,
  });

  async function createPlayer(form) {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    getTeam();
  }

  const handleChange = (e) => {
    setPlayerForm({
      ...playerForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createPlayer(playerForm);
    setPlayerForm({
      first_name: "",
      last_name: "",
      contact: "",
      age: "",
      number: "",
      position: "",
      status: "",
      team_id: 12,
    });
    navigate("/roster");
  };

  const loaded = () => {
    return (
      <div className="playerAdd">
        <h1 className="playerAdd__heading">Add Player</h1>
        <div className="playerAdd__line-divide"></div>
        <div className="playerAdd__container">
          <form onSubmit={handleSubmit}>
            <label className="playerAdd__label" htmlFor="first_name">
              First Name
            </label>
            <br />
            <input
              className="playerAdd__input"
              onChange={handleChange}
              type="text"
              name="first_name"
              value={playerForm.first_name}
              size="25"
            />
            <br />
            <label className="playerAdd__label" htmlFor="last_name">
              Last Name
            </label>
            <br />
            <input
              className="playerAdd__input"
              onChange={handleChange}
              type="text"
              name="last_name"
              value={playerForm.last_name}
              size="25"
            />
            <br />
            <label className="playerAdd__label" htmlFor="number">
              Number
            </label>
            <br />
            <input
              className="playerAdd__input"
              onChange={handleChange}
              type="text"
              name="number"
              value={playerForm.number}
              size="25"
            />
            <br />
            <label className="playerAdd__label" htmlFor="position">
              Position
            </label>
            <br />
            <input
              className="playerAdd__input"
              onChange={handleChange}
              type="text"
              name="position"
              value={playerForm.position}
              size="25"
            />
            <br />

            <label className="playerAdd__label" htmlFor="age">
              Age
            </label>
            <br />
            <input
              className="playerAdd__input"
              onChange={handleChange}
              type="text"
              name="age"
              value={playerForm.age}
              size="25"
            />
            <br />

            <label className="playerAdd__label" htmlFor="contact">
              Contact
            </label>
            <br />
            <input
              className="playerAdd__input"
              onChange={handleChange}
              type="text"
              name="contact"
              value={playerForm.contact}
              size="25"
            />
            <br />

            <label className="playerAdd__label" htmlFor="status">
              Status
            </label>
            <br />
            <select
              className="playerAdd__input"
              name="status"
              onChange={handleChange}
              value={playerForm.status}
            >
              <option value="">Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="IR">IR</option>
            </select>
            {/* <input
          className="playerAdd__input"
          onChange={handleChange}
          type="text"
          name="status"
          value={playerForm.status}
          size="25"
        /> */}
            <br />
            <button type="submit" className="playerAdd__submit">
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

export default AddPlayer;
