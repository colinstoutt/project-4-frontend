import React, { useState } from "react";
import "../scss/Roster.scss";
import AddPlayerWindow from "../components/AddPlayerWindow";
import EditPlayerWindow from "../components/EditPlayerWindow";
import Player from "../components/Player";
// import { getUserFromToken } from "../services/tokenService";
// const user = getUserFromToken();

const Roster = ({ data, getData }) => {
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(true);

  const URL = "http://localhost:3002/manager/player/";
  async function deletePlayer(id) {
    await fetch(`${URL}${id}/`, { method: "DELETE" });
    // console.log(id);
    getData();
  }

  const loaded = () => {
    const team = data.data;

    data.players.sort(function (a, b) {
      return a.number - b.number;
    });

    const rows = data.players.map((item, index) => {
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
          toggleEdit={toggleEdit}
          setToggleEdit={setToggleEdit}
        />
      );
    });
    return (
      <div className="roster">
        {toggleAdd ? (
          <AddPlayerWindow
            data={data}
            getData={getData}
            setToggleAdd={setToggleAdd}
          />
        ) : (
          <div></div>
        )}
        {toggleEdit ? (
          <EditPlayerWindow
            data={data}
            getData={getData}
            setToggleEdit={setToggleEdit}
          />
        ) : (
          <div></div>
        )}

        <div className="roster__heading-container">
          <h1 className="roster__heading">Roster</h1>
        </div>
        <div className="roster__line-divide"></div>
        <table className="roster__table">
          <thead>
            <tr
              className="roster__table-tr "
              style={{
                backgroundColor: `${team[0].team_color}`,
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
