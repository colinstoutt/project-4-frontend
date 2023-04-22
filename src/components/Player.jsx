import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const Player = (props) => {
  return (
    <>
      <tr className="roster__table-tr">
        <td className="roster__table-tr-td">{props.number}</td>
        <td className="roster__table-tr-td">
          {props.firstName} {props.lastName}{" "}
          <Link to={`/roster/${props.id}/`}>
            <EditIcon
              onClick={() => props.setToggleEdit(true)}
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
                    color: "rgb(73, 184, 123)",
                    fontWeight: "500",
                  }
                : {
                    color: "rgb(249, 184, 54)",
                    fontWeight: "500",
                  } && props.status === "Inactive"
                ? {
                    color: "rgb(249, 184, 54)",
                    fontWeight: "500",
                  }
                : {
                    color: "rgb(206, 66, 66)",
                    fontWeight: "500",
                  }
            }
          >
            {props.status}
          </span>
        </td>

        <td className="roster__table-tr-td roster__table-tr-td-status roster__delete-td">
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
