import React from "react";
import "../scss/Roster.scss";
import Player from "../components/Player";
import { useState } from "react";
// import PlayerForm from "../components/PlayerForm";

const Roster = ({ team, getTeam }) => {
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

  const URL = "http://localhost:8000/manager/player/";

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

  async function updatePlayer(form, id) {
    await fetch(`${URL}${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    getTeam();
  }

  async function deletePlayer(id) {
    await fetch(`${URL}${id}/`, { method: "DELETE" });
    console.log(id);
    getTeam();
  }

  function handleChange(e) {
    setPlayerForm({
      ...playerForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
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
  }

  const loaded = () => {
    const rows = team.players.map((item, index) => {
      return (
        <Player
          key={index}
          id={item.id}
          number={item.number}
          first_name={item.first_name}
          last_name={item.last_name}
          position={item.position}
          age={item.age}
          contact={item.contact}
          status={item.status}
          delete={deletePlayer}
        />
      );
    });
    return (
      <div className="roster">
        <h1 className="roster__heading">Roster</h1>

        <div className="roster__line-divide"></div>
        <table className="roster__table">
          <thead>
            <tr
              className="roster__table-tr"
              style={{ backgroundColor: `${team.team_color}`, color: "white" }}
            >
              <th className="roster__table-tr-th">#</th>
              <th className="roster__table-tr-th">Name</th>
              <th className="roster__table-tr-th">Position</th>
              <th className="roster__table-tr-th">Age</th>
              <th className="roster__table-tr-th">Contact</th>
              <th className="roster__table-tr-th">Status</th>
              <th className="roster__table-tr-th"></th>
            </tr>
          </thead>
          <tbody className="roster__tbody">{rows}</tbody>
        </table>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="roster__input"
            type="text"
            placeholder="#"
            size="4"
            name="number"
            value={playerForm.number}
          />
          <input
            onChange={handleChange}
            className="roster__input"
            type="text"
            placeholder="First Name"
            size="15"
            name="first_name"
            value={playerForm.first_name}
          />
          <input
            onChange={handleChange}
            className="roster__input"
            type="text"
            placeholder="Last Name"
            size="15"
            name="last_name"
            value={playerForm.last_name}
          />
          <input
            onChange={handleChange}
            className="roster__input"
            type="text"
            placeholder="Pos"
            size="10"
            name="position"
            value={playerForm.position}
          />
          <input
            onChange={handleChange}
            className="roster__input"
            type="text"
            placeholder="Age"
            size="4"
            name="age"
            value={playerForm.age}
          />
          <input
            onChange={handleChange}
            className="roster__input"
            type="text"
            placeholder="Contact"
            size="15"
            name="contact"
            value={playerForm.contact}
          />
          <select
            className="roster__input"
            name="status"
            onChange={handleChange}
            value={playerForm.status}
          >
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="IR">IR</option>
          </select>
          <button className="roster__input-submit">Add Player</button>
        </form>
      </div>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return <div>{team ? loaded() : loading()}</div>;
};

export default Roster;
