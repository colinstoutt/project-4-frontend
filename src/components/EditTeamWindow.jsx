import React from "react";
import "../scss/EditTeam.scss";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";

const EditTeamWindow = ({ data, getData, setToggleEdit }) => {
  const navigate = useNavigate();
  const URL = "http://localhost:3002/manager/team/";
  const { id } = useParams();
  const team = data.data;

  const [teamForm, setTeamForm] = useState(team);

  async function updateTeam(form, id) {
    await fetch(`${URL}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    getData();
  }

  function handleChange(e) {
    setTeamForm({
      ...teamForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateTeam(teamForm, id);
    navigate("/team");
  }

  const handleCancel = () => {
    setToggleEdit(false);
    navigate("/team");
  };

  const loaded = () => {
    return (
      <div className="team">
        <div className="team__form-container">
          <form
            onSubmit={handleSubmit}
            className="team__form-container-form"
            style={{ borderLeft: `10px solid ${team[0].team_color}` }}
          >
            <h1 className="team__heading">Edit Team</h1>
            <div className="team__line-divide"></div>
            <label className="team__form-label" htmlFor="city">
              City
            </label>
            <br />
            <input
              onChange={handleChange}
              className="team__form-container-input"
              type="text"
              name="city"
              placeholder={team[0].city}
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
              placeholder={team[0].mascot}
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
              placeholder={team[0].logo_url}
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
              placeholder={team[0].team_color}
              value={teamForm.team_color}
              size="25"
            />
            <br />
            <button className="team__submit">Submit</button>
            <button onClick={handleCancel} className="team__cancel">
              Cancel
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

export default EditTeamWindow;
