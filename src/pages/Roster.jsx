import React from "react";
import "../scss/Roster.scss";
import { Link } from "react-router-dom";
import Player from "../components/Player";

const Roster = ({ team, getTeam }) => {
  const URL = "http://localhost:8000/manager/player/";
  async function deletePlayer(id) {
    await fetch(`${URL}${id}/`, { method: "DELETE" });
    console.log(id);
    getTeam();
  }

  const loaded = () => {
    team.players.sort(function (a, b) {
      return a.number - b.number;
    });

    const rows = team.players.map((item, index) => {
      return (
        <Player
          key={index}
          id={item.id}
          number={item.number}
          first_name={item.first_name}
          last_name={item.last_name}
          position={item.position}
          age={item.age}
          contact={item.contact}
          status={item.status}
          delete={deletePlayer}
        />
      );
    });
    return (
      <div className="roster">
        <div className="roster__heading-container">
          <h1 className="roster__heading">Roster</h1>
          <Link to="/roster/add">
            <button className="add-button">Add Player</button>
          </Link>
        </div>
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
              <th className="roster__table-tr-th"></th>
            </tr>
          </thead>
          <tbody className="roster__tbody">{rows}</tbody>
        </table>
      </div>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return <div>{team ? loaded() : loading()}</div>;
};

export default Roster;
