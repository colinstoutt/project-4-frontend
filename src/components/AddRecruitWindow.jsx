import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "../scss/AddRecruitWindow.scss";
import { getUserFromToken } from "../services/tokenService";
const user = getUserFromToken();

const AddRecruitWindow = ({ userTeam, getData, setToggleAddRecruit }) => {
  const URL = "http://localhost:3002/manager/recruit/";
  const navigate = useNavigate();
  const [recruitForm, setRecruitForm] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    age: "",
    hometown: "",
    position: "",
    height: "",
    weight: "",
    current_team: "",
    notes: "",
    team: userTeam[0],
  });

  async function createRecruit(form) {
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
    setRecruitForm({
      ...recruitForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createRecruit(recruitForm);
    setRecruitForm({
      firstName: "",
      lastName: "",
      contact: "",
      age: "",
      hometown: "",
      position: "",
      height: "",
      weight: "",
      current_team: "",
      notes: "",
      team: userTeam[0],
    });
    setToggleAddRecruit(false);
  };
  return (
    <div
      className="recruit__window"
      style={{
        borderLeft: `10px solid ${userTeam[0].team_color}`,
      }}
    >
      <h1 className="recruitAdd__heading">Add Recruit</h1>
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
            value={recruitForm.firstName}
          />

          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="lastName"
            size="25"
            placeholder="Last Name"
            value={recruitForm.lastName}
          />

          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="hometown"
            size="25"
            placeholder="Hometown"
            value={recruitForm.hometown}
          />
          <br />
          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="age"
            size="25"
            placeholder="Age"
            value={recruitForm.age}
          />

          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="height"
            size="25"
            placeholder="Height"
            value={recruitForm.height}
          />

          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="weight"
            size="25"
            placeholder="Weight"
            value={recruitForm.weight}
          />
          <br />
          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="position"
            size="25"
            placeholder="Positon"
            value={recruitForm.position}
          />
          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="current_team"
            size="25"
            placeholder="Current Team"
            value={recruitForm.current_team}
          />
          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="contact"
            size="25"
            placeholder="Contact"
            value={recruitForm.contact}
          />
          <br />
          <br />
          <textarea
            onChange={handleChange}
            value={recruitForm.notes}
            name="notes"
            cols="50"
            rows="5"
            placeholder="Notes"
          ></textarea>
          <br />

          <button type="submit" className="recruitAdd__submit">
            Submit
          </button>
          <button
            onClick={() => setToggleAddRecruit(false)}
            className="recruitAdd__cancel"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecruitWindow;
