import React from "react";
import "../scss/Recruit.scss";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const Recruit = (props) => {
  const URL = "http://localhost:3002/manager/recruit/";
  async function deleteRecruit(id) {
    await fetch(`${URL}${id}/`, { method: "DELETE" });
    // console.log(id);
    props.getData();
  }
  return (
    <div
      className="recruit"
      style={{ borderLeft: `10px solid ${props.userTeam[0].team_color}` }}
    >
      <h1 className="recruit__heading">
        {props.firstName} {props.lastName}
        <Link
          className="recruitment__show-link"
          to={`/recruitment/${props.id}/`}
        >
          <EditIcon className="schedule__edit-icon" sx={{ fontSize: "1rem" }} />
        </Link>
      </h1>

      <table className="table-one">
        <thead className="recruit__thead">
          <tr>
            <th>Hometown</th>
            <th>Age</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Position</th>
            <th>Current Team</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.hometown}</td>
            <td>{props.age}</td>
            <td>
              {Math.floor(props.height / 12)}'
              {props.height - Math.floor(props.height / 12) * 12}
            </td>
            <td>
              {props.Weight}
              <span className="lbs">lbs</span>
            </td>
            <td>{props.position}</td>
            <td>{props.current_team}</td>
            <td>{props.contact}</td>
          </tr>
        </tbody>
      </table>

      <div className="recruit__notes" htmlFor="notes">
        Notes
      </div>

      <br />
      <div>{props.notes}</div>
      <button
        className="recruit__delete"
        onClick={() => deleteRecruit(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Recruit;
