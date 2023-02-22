import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const Player = (props) => {
  return (
    <>
      <tr className="roster__table-tr">
        <td className="roster__table-tr-td">{props.number}</td>
        <td className="roster__table-tr-td">
          {props.first_name} {props.last_name}{" "}
          <Link to={`/roster/${props.id}/`}>
            <EditIcon
              className="roster_edit"
              sx={{
                fontSize: "0.8rem",
                marginLeft: "0rem",
                marginTop: "0.2rem",
                color: "grey",
                ":hover": { color: "black", cursor: "pointer" },
              }}
            />
          </Link>
        </td>
        <td className="roster__table-tr-td">{props.position}</td>
        <td className="roster__table-tr-td">{props.age}</td>
        <td className="roster__table-tr-td">{props.contact}</td>
        <td
          className="roster__table-tr-td roster__table-tr-td-status"
          style={{ width: "6rem" }}
        >
          <span
            className="roster__status-pill"
            style={
              props.status === "Active"
                ? {
                    border: "1px solid rgb(104, 219, 102)",
                  }
                : {
                    border: "1px solid rgb(255, 195, 54)",
                  } && props.status === "Inactive"
                ? {
                    border: "1px solid rgb(255, 195, 54)",
                  }
                : {
                    border: "1px solid rgb(206, 66, 66)",
                  }
            }
          >
            {props.status}
          </span>
        </td>
        <div className="edit-delete">
          <td className="roster__table-tr-td roster__table-tr-td-status ">
            <button
              className="roster__delete"
              onClick={() => props.delete(props.id)}
            >
              Delete
            </button>
          </td>
        </div>
      </tr>
    </>
  );
};

export default Player;
