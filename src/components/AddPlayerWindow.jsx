import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "../scss/AddPlayerWindow.scss";

const AddPlayerWindow = ({ userTeam, getData, setToggleAdd }) => {
  const URL = "http://localhost:3002/manager/player/";
  const navigate = useNavigate();
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
    setToggleAdd(false);
  };
  return (
    <div
      className="add__window"
      style={{
        borderLeft: `10px solid ${userTeam[0].team_color}`,
      }}
    >
      <h1 className="playerAdd__heading">Add Player</h1>
      <div className="playerAdd__line-divide"></div>
      <div className="playerAdd__container">
        <form onSubmit={handleSubmit}>
          <br />
          <input
            className="playerAdd__input"
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={playerForm.firstName}
            size="25"
          />

          <input
            className="playerAdd__input"
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={playerForm.lastName}
            size="25"
          />
          <input
            className="playerAdd__input"
            onChange={handleChange}
            type="text"
            name="number"
            placeholder="#"
            value={playerForm.number}
            size="5"
          />
          <br />
          <input
            className="playerAdd__input"
            onChange={handleChange}
            type="text"
            name="position"
            placeholder="Position"
            value={playerForm.position}
            size="25"
          />
          <input
            className="playerAdd__input"
            onChange={handleChange}
            type="text"
            name="age"
            placeholder="Age"
            value={playerForm.age}
            size="5"
          />
          <input
            className="playerAdd__input"
            onChange={handleChange}
            type="text"
            name="contact"
            placeholder="Contact"
            value={playerForm.contact}
            size="25"
          />
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
          <button
            // onClick={() => setToggleAdd(false)}
            type="submit"
            className="playerAdd__submit"
          >
            Submit
          </button>
          <button
            onClick={() => setToggleAdd(false)}
            className="playerAdd__cancel"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlayerWindow;
