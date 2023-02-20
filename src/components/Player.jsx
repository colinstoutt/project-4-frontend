import React from "react";

const Player = (props) => {
  return (
    <tr className="roster__table-tr" key={props.key}>
      <td className="roster__table-tr-td">{props.number}</td>
      <td className="roster__table-tr-td">
        {props.first_name} {props.last_name}
      </td>
      <td className="roster__table-tr-td">{props.position}</td>
      <td className="roster__table-tr-td">{props.age}</td>
      <td className="roster__table-tr-td">{props.contact}</td>
      <td className="roster__table-tr-td">{props.status}</td>
    </tr>
  );
};

export default Player;
