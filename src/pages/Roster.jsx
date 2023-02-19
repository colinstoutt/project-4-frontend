import React from "react";
import "../scss/Roster.scss";

const Roster = ({ team }) => {
  const rows = team.players.map((item, index) => {
    return (
      <tr className="roster__table-tr" key={index}>
        <td className="roster__table-tr-td">{item.number}</td>
        <td className="roster__table-tr-td">
          {item.first_name} {item.last_name}
        </td>
        <td className="roster__table-tr-td">{item.position}</td>
        <td className="roster__table-tr-td">{item.age}</td>
        <td className="roster__table-tr-td">{item.contact}</td>
        <td className="roster__table-tr-td">{item.status}</td>
      </tr>
    );
  });

  return (
    <div className="roster">
      <h1 className="roster__heading">Roster</h1>
      <div className="roster__line-divide"></div>
      <table className="roster__table">
        <thead>
          <tr
            className="roster__table-tr"
            style={{ backgroundColor: `${team.team_color}`, color: "white" }}
          >
            <th className="roster__table-tr-th">#</th>
            <th className="roster__table-tr-th">Name</th>
            <th className="roster__table-tr-th">Position</th>
            <th className="roster__table-tr-th">Age</th>
            <th className="roster__table-tr-th">Contact</th>
            <th className="roster__table-tr-th">Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Roster;
