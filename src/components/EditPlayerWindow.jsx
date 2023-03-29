import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../scss/AddPlayerWindow.scss";
import { getUserFromToken } from "../services/tokenService";
const user = getUserFromToken();

const EditPlayerWindow = ({ userTeam, data, getData, setToggleEdit }) => {
  const URL = "http://localhost:3002/manager/player/";
  const { id } = useParams();
  const navigate = useNavigate();
  const player = data && data.players.find((player) => player._id === id);
  const [editForm, setEditForm] = useState(player);
  console.log(player, id);

  async function updatePlayer(form, id) {
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
    updatePlayer(editForm, id);
    navigate("/roster");
  };

  const handleCancel = () => {
    setToggleEdit(false);
    navigate("/roster");
  };
  return (
    <div
      className="add__window"
      style={{
        borderLeft: `10px solid ${userTeam[0].team_color}`,
      }}
    >
      <h1 className="playerAdd__heading">Edit Player</h1>
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
            value={editForm.firstName}
            size="25"
          />

          <input
            className="playerAdd__input"
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={editForm.lastName}
            size="25"
          />
          <input
            className="playerAdd__input"
            onChange={handleChange}
            type="text"
            name="number"
            placeholder="#"
            value={editForm.number}
            size="5"
          />
          <br />
          <input
            className="playerAdd__input"
            onChange={handleChange}
            type="text"
            name="position"
            placeholder="Position"
            value={editForm.position}
            size="25"
          />
          <input
            className="playerAdd__input"
            onChange={handleChange}
            type="text"
            name="age"
            placeholder="Age"
            value={editForm.age}
            size="5"
          />
          <input
            className="playerAdd__input"
            onChange={handleChange}
            type="text"
            name="contact"
            placeholder="Contact"
            value={editForm.contact}
            size="25"
          />
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
          <button type="submit" className="playerAdd__submit">
            Submit
          </button>
          <button onClick={handleCancel} className="playerAdd__cancel">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPlayerWindow;
