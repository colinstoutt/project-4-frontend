import React from "react";
import "../scss/EditTeam.scss";
import { useState } from "react";

const EditTeam = ({ team, getTeam }) => {
  const URL = "http://localhost:8000/manager/team/12/";

  const [teamForm, setTeamForm] = useState({
    city: "",
    mascot: "",
    logo_url: "",
    team_color: "",
  });

  async function updateTeam(form) {
    await fetch(URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    getTeam();
  }

  function handleChange(e) {
    setTeamForm({
      ...teamForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateTeam(teamForm);
    setTeamForm({
      city: "",
      mascot: "",
      logo_url: "",
      team_color: "",
    });
  }

  const loaded = () => {
    return (
      <div className="team">
        <h1 className="team__heading">Edit Team</h1>
        <div className="team__line-divide"></div>

        <div className="team__form-container">
          <form
            onSubmit={handleSubmit}
            className="team__form-container-form"
            style={{ borderLeft: `10px solid ${team.team_color}` }}
          >
            <label className="team__form-label" htmlFor="city">
              City
            </label>
            <br />
            <input
              onChange={handleChange}
              className="team__form-container-input"
              type="text"
              name="city"
              placeholder={team.city}
              value={teamForm.city}
              size="25"
            />
            <br />
            <label className="team__form-container-label" htmlFor="mascot">
              Mascot
            </label>
            <br />
            <input
              onChange={handleChange}
              className="team__form-container-input"
              type="text"
              name="mascot"
              placeholder={team.mascot}
              value={teamForm.mascot}
              size="25"
            />
            <br />
            <label className="team__form-label" htmlFor="logo">
              Logo <span className="team__form-input-span">(URL)</span>
            </label>
            <br />
            <input
              onChange={handleChange}
              className="team__form-container-input"
              type="text"
              name="logo_url"
              placeholder={team.logo_url}
              value={teamForm.logo_url}
              size="25"
            />
            <br />
            <label className="team__form-label" htmlFor="team_color">
              Team Color
            </label>
            <br />
            <input
              onChange={handleChange}
              className="team__form-container-input"
              type="text"
              name="team_color"
              placeholder={team.team_color}
              value={teamForm.team_color}
              size="25"
            />
            <br />
            <button className="team__submit">Submit</button>
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

export default EditTeam;
