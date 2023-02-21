import React from "react";
import Recruit from "../components/Recruit";
import "../scss/Recruitment.scss";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const Recruitment = ({ team, getTeam }) => {
  const loaded = () => {
    return (
      <div className="recruitment">
        <div className="recruitment__heading">
          <h1>Recruitment</h1>
          <Link to="/recruitment/add">
            <button className="recruitment__heading-add">Add Recruit</button>
          </Link>
        </div>
        <div className="recruitment__line-divide"></div>
        {team.recruits.map((item) => {
          return (
            <Recruit
              key={item.id}
              id={item.id}
              first_name={item.first_name}
              last_name={item.last_name}
              contact={item.contact}
              age={item.age}
              hometown={item.hometown}
              position={item.position}
              height={item.height}
              weight={item.weight}
              current_team={item.current_team}
              notes={item.notes}
              getTeam={getTeam}
              team={team}
            />
          );
        })}
      </div>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return <div>{team ? loaded() : loading()}</div>;
};

export default Recruitment;
