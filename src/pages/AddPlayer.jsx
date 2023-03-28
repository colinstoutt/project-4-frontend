import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "../scss/AddPlayer.scss";
import { getUserFromToken } from "../services/tokenService";
const user = getUserFromToken();

const AddPlayer = ({ data, getData }) => {
  const URL = "http://localhost:3002/manager/player/";
  const navigate = useNavigate();
  const teams = data && data.data;
  const userTeam = teams && teams.filter((team) => team.user === user._id);
  const [playerForm, setPlayerForm] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    age: "",
    number: "",
    position: "",
    status: "",
    team: userTeam[0],
  });

  async function createPlayer(form) {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    getData();
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
      firstName: "",
      lastName: "",
      contact: "",
      age: "",
      number: "",
      position: "",
      status: "",
      team: userTeam[0],
    });
    navigate("/roster");
  };

  const loaded = () => {
    return (
      <div className="playerAdd">
        <h1 className="playerAdd__heading">Add Player</h1>
        <div className="playerAdd__line-divide"></div>
        <div
          className="playerAdd__container"
          style={{ borderLeft: `10px solid ${userTeam[0].team_color}` }}
        >
          <form onSubmit={handleSubmit}>
            <label className="playerAdd__label" htmlFor="firstName">
              First Name
            </label>
            <br />
            <input
              className="playerAdd__input"
              onChange={handleChange}
              type="text"
              name="firstName"
              value={playerForm.firstName}
              size="25"
            />
            <br />
            <label className="playerAdd__label" htmlFor="lastName">
              Last Name
            </label>
            <br />
            <input
              className="playerAdd__input"
              onChange={handleChange}
              type="text"
              name="lastName"
              value={playerForm.lastName}
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

  return <div>{data ? loaded() : loading()}</div>;
};

export default AddPlayer;
