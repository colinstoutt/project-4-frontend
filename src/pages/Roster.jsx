import React, { useEffect } from "react";
import "../scss/Roster.scss";
import { Link } from "react-router-dom";
import Player from "../components/Player";
import { getUserFromToken } from "../services/tokenService";
const user = getUserFromToken();

const Roster = ({ data, getData }) => {
  const URL = "http://localhost:3002/manager/player/";
  async function deletePlayer(id) {
    await fetch(`${URL}${id}/`, { method: "DELETE" });
    // console.log(id);
    getData();
  }
  const loaded = () => {
    const teams = data.data;
    const userTeam = teams.filter((team) => team.user === user._id);

    data.players.sort(function (a, b) {
      return a.number - b.number;
    });

    const rows = data.players
      .filter((player) => player.team === userTeam[0]._id)
      .map((item, index) => {
        return (
          <Player
            key={index}
            id={item._id}
            team={item.team}
            number={item.number}
            firstName={item.firstName}
            lastName={item.lastName}
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
              className="roster__table-tr "
              style={{
                backgroundColor: `${userTeam[0].team_color}`,
                color: "white",
              }}
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
  return <div>{data ? loaded() : loading()}</div>;
};

export default Roster;
