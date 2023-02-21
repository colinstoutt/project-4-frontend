import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

const Player = (props) => {
  return (
    <>
      <tr className="roster__table-tr">
        <td className="roster__table-tr-td">{props.number}</td>
        <td className="roster__table-tr-td">
          {props.first_name} {props.last_name}
        </td>
        <td className="roster__table-tr-td">{props.position}</td>
        <td className="roster__table-tr-td">{props.age}</td>
        <td className="roster__table-tr-td">{props.contact}</td>
        <td className="roster__table-tr-td roster__table-tr-td-status">
          <span
            className="roster__status-pill"
            style={
              props.status === "Active"
                ? {
                    backgroundColor: "rgb(104, 219, 102, .3)",
                    border: "1px solid rgb(104, 219, 102)",
                  }
                : {
                    backgroundColor: "rgb(255, 195, 54, 0.3)",
                    border: "1px solid rgb(255, 195, 54)",
                  } && props.status === "Inactive"
                ? {
                    backgroundColor: "rgb(255, 195, 54, 0.3)",
                    border: "1px solid rgb(255, 195, 54)",
                  }
                : {
                    backgroundColor: "rgb(206, 66, 66, 0.3)",
                    border: "1px solid rgb(206, 66, 66)",
                  }
            }
          >
            {props.status}
          </span>
        </td>
        <td>
          <button
            className="roster__delete"
            onClick={() => props.delete(props.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Player;
