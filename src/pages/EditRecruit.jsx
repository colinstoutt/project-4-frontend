import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../scss/EditRecruit.scss";

const RecruitShow = ({ team, getTeam, updateRecruit }) => {
  const URL = "http://localhost:8000/manager/recruit/";

  const { id } = useParams();
  const navigate = useNavigate();
  const recruit = team.recruits.find((recruit) => recruit.id === +id);
  const [editForm, setEditForm] = useState(recruit);
  // console.log(recruit, id);

  async function updateRecruit(form, id) {
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
    updateRecruit(editForm, id);
    navigate("/recruitment");
  };

  const loaded = () => {
    return (
      <div className="recruitShow">
        <h1 className="recruitShow__heading">Edit Recruit</h1>
        <div className="recruitShow__line-divide"></div>
        <div
          className="recruitShow__recruit-container"
          style={{ borderLeft: `10px solid ${team.team_color}` }}
        >
          <div className="recruitShow__name">
            {recruit.first_name} {recruit.last_name}
          </div>
          <form onSubmit={handleSubmit}>
            <label className="recruitShow__label" htmlFor="hometown">
              Hometown
            </label>
            <br />
            <input
              className="recruitShow__input"
              onChange={handleChange}
              type="text"
              name="hometown"
              value={editForm.hometown}
              size="25"
            />
            <br />
            <label className="recruitShow__label" htmlFor="age">
              Age
            </label>
            <br />
            <input
              className="recruitShow__input"
              onChange={handleChange}
              type="text"
              name="age"
              value={editForm.age}
              size="25"
            />
            <br />

            <label className="recruitShow__label" htmlFor="height">
              Height (in)
            </label>
            <br />
            <input
              className="recruitShow__input"
              onChange={handleChange}
              type="text"
              name="height"
              value={editForm.height}
              size="25"
            />
            <br />

            <label className="recruitShow__label" htmlFor="weight">
              Weight (lbs)
            </label>
            <br />
            <input
              className="recruitShow__input"
              onChange={handleChange}
              type="text"
              name="weight"
              value={editForm.weight}
              size="25"
            />
            <br />

            <label className="recruitShow__label" htmlFor="position">
              Position
            </label>
            <br />
            <input
              className="recruitShow__input"
              onChange={handleChange}
              type="text"
              name="position"
              value={editForm.position}
              size="25"
            />
            <br />

            <label className="recruitShow__label" htmlFor="current_team">
              Current Team
            </label>
            <br />
            <input
              className="recruitShow__input"
              onChange={handleChange}
              type="text"
              name="current_team"
              value={editForm.current_team}
              size="25"
            />
            <br />

            <label className="recruitShow__label" htmlFor="contact">
              Contact
            </label>
            <br />
            <input
              className="recruitShow__input"
              onChange={handleChange}
              type="text"
              name="contact"
              value={editForm.contact}
              size="25"
            />
            <br />
            <label className="recruitShow__notes" htmlFor="notes">
              Notes
            </label>
            <br />
            <textarea
              onChange={handleChange}
              name="notes"
              cols="50"
              rows="5"
              defaultValue={editForm.notes}
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

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return <div>{team ? loaded() : loading()}</div>;
};

export default RecruitShow;
