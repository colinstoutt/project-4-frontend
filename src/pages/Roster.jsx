import React from "react";
import "../scss/Roster.scss";

const Roster = ({ team }) => {
  const rows = team.players.map((item, index) => {
    return (
      <tr className="roster__table-tr" key={index}>
        <td className="roster__table-tr-td">{item.number}</td>
        <td>
          {item.first_name} {item.last_name}
        </td>
        <td>{item.position}</td>
        <td>{item.age}</td>
        <td>{item.contact}</td>
        <td>{item.status}</td>
      </tr>
    );
  });

  return (
    <div className="roster">
      <h1 className="roster__heading">Roster</h1>
      <div className="roster__line-divide"></div>
      <table className="roster__table">
        <thead>
          <tr className="roster__table-thead-tr">
            <th className="roster__table-tr-th">#</th>
            <th>Name</th>
            <th>Position</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Roster;
