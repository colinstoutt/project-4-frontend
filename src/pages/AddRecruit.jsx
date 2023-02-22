import React, { useState } from "react";
import "../scss/AddRecruit.scss";
import { useNavigate } from "react-router";

const RecruitAdd = ({ team, getTeam }) => {
  const URL = "http://localhost:8000/manager/recruit/";
  const navigate = useNavigate();

  const [recruitForm, setRecruitForm] = useState({
    first_name: "",
    last_name: "",
    contact: "",
    age: "",
    hometown: "",
    position: "",
    height: "",
    weight: "",
    current_team: "",
    notes: "",
    team_id: 12,
  });

  async function createRecruit(form) {
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
    setRecruitForm({
      ...recruitForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createRecruit(recruitForm);
    setRecruitForm({
      first_name: "",
      last_name: "",
      contact: "",
      age: "",
      hometown: "",
      position: "",
      height: "",
      weight: "",
      current_team: "",
      notes: "",
      team_id: 12,
    });
    navigate("/recruitment");
  };

  return (
    <div className="recruitAdd">
      <h1 className="recruitAdd__heading">Add Recruit</h1>
      <div className="recruitAdd__line-divide"></div>
      <div className="recruitAdd__container">
        <form onSubmit={handleSubmit}>
          <label className="recruitShow__label" htmlFor="hometown">
            First Name
          </label>
          <br />
          <input
            onChange={handleChange}
            className="recruitShow__input"
            type="text"
            name="first_name"
            size="25"
            value={recruitForm.first_name}
          />
          <br />
          <label className="recruitShow__label" htmlFor="hometown">
            Last Name
          </label>
          <br />
          <input
            onChange={handleChange}
            className="recruitShow__input"
            type="text"
            name="last_name"
            size="25"
            value={recruitForm.last_name}
          />
          <br />
          <label className="recruitShow__label" htmlFor="hometown">
            Hometown
          </label>
          <br />
          <input
            onChange={handleChange}
            className="recruitShow__input"
            type="text"
            name="hometown"
            size="25"
            value={recruitForm.hometown}
          />
          <br />
          <label className="recruitShow__label" htmlFor="age">
            Age
          </label>
          <br />
          <input
            onChange={handleChange}
            className="recruitShow__input"
            type="text"
            name="age"
            size="25"
            value={recruitForm.age}
          />
          <br />

          <label className="recruitShow__label" htmlFor="height">
            Height (in)
          </label>
          <br />
          <input
            onChange={handleChange}
            className="recruitShow__input"
            type="text"
            name="height"
            size="25"
            value={recruitForm.height}
          />
          <br />

          <label className="recruitShow__label" htmlFor="weight">
            Weight (lbs)
          </label>
          <br />
          <input
            onChange={handleChange}
            className="recruitShow__input"
            type="text"
            name="weight"
            size="25"
            value={recruitForm.weight}
          />
          <br />

          <label className="recruitShow__label" htmlFor="position">
            Position
          </label>
          <br />
          <input
            onChange={handleChange}
            className="recruitShow__input"
            type="text"
            name="position"
            size="25"
            value={recruitForm.position}
          />
          <br />

          <label className="recruitShow__label" htmlFor="current_team">
            Current Team
          </label>
          <br />
          <input
            onChange={handleChange}
            className="recruitShow__input"
            type="text"
            name="current_team"
            size="25"
            value={recruitForm.current_team}
          />
          <br />

          <label className="recruitShow__label" htmlFor="contact">
            Contact
          </label>
          <br />
          <input
            onChange={handleChange}
            className="recruitShow__input"
            type="text"
            name="contact"
            size="25"
            value={recruitForm.contact}
          />
          <br />
          <label className="recruitShow__notes" htmlFor="notes">
            Notes
          </label>
          <br />
          <textarea
            onChange={handleChange}
            value={recruitForm.notes}
            name="notes"
            cols="50"
            rows="5"
          ></textarea>
          <br />

          <button type="submit" className="recruitShow__submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecruitAdd;
