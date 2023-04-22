import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "../scss/AddRecruitWindow.scss";
import config from "../config";

// import { getUserFromToken } from "../services/tokenService";
// const user = getUserFromToken();

const AddRecruitWindow = ({ data, getData, setToggleAddRecruit }) => {
  const URL = `${config.PROD.URL}manager/recruit/`;
  const team = data.data;
  const navigate = useNavigate();
  const [recruitForm, setRecruitForm] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    age: "",
    hometown: "",
    position: "",
    height: "",
    Weight: "",
    current_team: "",
    notes: "",
    team: "6441e0ec3ce3bc6b1174b3c4",
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
      Weight: "",
      current_team: "",
      notes: "",
      team: "6441e0ec3ce3bc6b1174b3c4",
    });
    setToggleAddRecruit(false);
  };
  return (
    <div
      className="recruit__window"
      style={{
        borderLeft: `10px solid ${team[0].team_color}`,
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
            size="5"
            placeholder="Age"
            value={recruitForm.age}
          />

          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="height"
            size="7"
            placeholder="Height"
            value={recruitForm.height}
          />

          <input
            onChange={handleChange}
            className="recruitAdd__input"
            type="text"
            name="weight"
            size="7"
            placeholder="Weight"
            value={recruitForm.weight}
          />
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
            cols="85"
            rows="3"
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
