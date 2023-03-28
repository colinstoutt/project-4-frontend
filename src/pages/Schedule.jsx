import React from "react";
import "../scss/Schedule.scss";
import Game from "../components/Game";
import { Link } from "react-router-dom";

const Schedule = ({ data, getTeam }) => {
  // const sortByDate = () => {};
  const loaded = () => {
    data.games.sort(function (a, b) {
      return Date.parse(a.date) - Date.parse(b.date);
    });

    return (
      <div className="schedule">
        <div className="schedule__heading-container">
          <h1 className="schedule__heading">Schedule</h1>
          <Link to="/schedule/add">
            <button className="add-button">Add Game</button>
          </Link>
        </div>
        <div className="schedule__line-divide"></div>
        {data.games.map((item) => {
          return (
            <Game
              key={item.id}
              id={item.id}
              location={item.location}
              date={item.date}
              time={item.time}
              homeTeam={item.home_team}
              awayTeam={item.away_team}
              data={data}
              getTeam={getTeam}
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
