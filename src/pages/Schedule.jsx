import React from "react";
import { useState } from "react";
import "../scss/Schedule.scss";
import Game from "../components/Game";
import { Link } from "react-router-dom";
import AddGameWindow from "../components/AddGameWindow";
// import { getUserFromToken } from "../services/tokenService";
// const user = getUserFromToken();

const Schedule = ({ data, getData }) => {
  const [toggleAddGame, setToggleAddGame] = useState(false);
  const [toggleEditGame, setToggleEditGame] = useState(false);

  const loaded = () => {
    const team = data.data;

    data.games.sort(function (a, b) {
      return Date.parse(a.date) - Date.parse(b.date);
    });

    return (
      <div className="schedule">
        {toggleAddGame ? (
          <AddGameWindow
            data={data}
            getData={getData}
            setToggleAddGame={setToggleAddGame}
          />
        ) : (
          <></>
        )}
        <div className="schedule__heading-container">
          <h1 className="schedule__heading">Schedule</h1>
          <button
            className="schedule__add-button"
            onClick={() => setToggleAddGame(!toggleAddGame)}
          >
            Add Game
          </button>
        </div>
        <div className="schedule__line-divide"></div>
        {data.games.map((item) => {
          return (
            <Game
              key={item.id}
              id={item._id}
              location={item.location}
              date={item.date}
              time={item.time}
              address={item.address}
              homeTeam={item.homeTeam}
              awayTeam={item.awayTeam}
              data={data}
              getData={getData}
              setToggleEditGame={setToggleEditGame}
            />
          );
        })}
      </div>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <div>{data ? loaded() : loading()}</div>;
};

export default Schedule;
