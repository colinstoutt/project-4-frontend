import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../scss/AddRecruitWindow.scss";
import { getUserFromToken } from "../services/tokenService";
const user = getUserFromToken();

const EditRecruitWindow = ({
  userTeam,
  data,
  getData,
  setToggleEditRecruit,
}) => {
  const URL = "http://localhost:3002/manager/recruit/";
  const { id } = useParams();
  const navigate = useNavigate();
  const recruit = data && data.recruits.find((recruit) => recruit._id === id);
  const [editForm, setEditForm] = useState(recruit);
  console.log(recruit, id);

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
    navigate("/recruitment");
  };

  const handleCancel = () => {
    setToggleEditRecruit(false);
    navigate("/recruitment");
  };

  return (
    <div
      className="recruit__window"
      style={{
        borderLeft: `10px solid ${userTeam[0].team_color}`,
      }}
    >
      <h1 className="recruitAdd__heading">Edit Recruit</h1>
      <div className="recruitAdd__line-divide"></div>
      <div className="recruitAdd__container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="firstName"
            size="25"
            placeholder="First Name"
            value={editForm.firstName}
          />

          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="lastName"
            size="25"
            placeholder="Last Name"
            value={editForm.lastName}
          />

          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="hometown"
            size="25"
            placeholder="Hometown"
            value={editForm.hometown}
          />
          <br />
          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="age"
            size="5"
            placeholder="Age"
            value={editForm.age}
          />

          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="height"
            size="7"
            placeholder="Height"
            value={editForm.height}
          />

          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="weight"
            size="7"
            placeholder="Weight"
            value={editForm.weight}
          />
          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="position"
            size="25"
            placeholder="Positon"
            value={editForm.position}
          />
          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="current_team"
            size="25"
            placeholder="Current Team"
            value={editForm.current_team}
          />
          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="contact"
            size="25"
            placeholder="Contact"
            value={editForm.contact}
          />
          <br />
          <br />
          <textarea
            onChange={handleChange}
            value={editForm.notes}
            name="notes"
            cols="85"
            rows="3"
            placeholder="Notes"
          ></textarea>
          <br />

          <button type="submit" className="recruitAdd__submit">
            Submit
          </button>
          <button onClick={handleCancel} className="recruitAdd__cancel">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditRecruitWindow;
