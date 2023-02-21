import React from "react";
import "../scss/Recruit.scss";

const Recruit = (props) => {
  return (
    <div
      className="recruit"
      style={{ borderLeft: `10px solid ${props.team.team_color}` }}
    >
      <h1 className="recruit__heading">
        {props.first_name} {props.last_name}
      </h1>

      <table className="table-one">
        <thead className="recruit__thead">
          <tr>
            <th>Hometown</th>
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
            <td>
              {Math.floor(props.height / 12)}'
              {props.height - Math.floor(props.height / 12) * 12}
            </td>
            <td>
              {props.weight}
              <span className="lbs">lbs</span>
            </td>
            <td>{props.position}</td>
            <td>{props.current_team}</td>
            <td>{props.contact}</td>
          </tr>
        </tbody>
      </table>

      <label className="recruit__notes" htmlFor="notes">
        Notes
      </label>
      <br />
      <textarea
        name="notes"
        id=""
        cols="70"
        rows="2"
        defaultValue={props.notes}
      ></textarea>
    </div>
  );
};

export default Recruit;
