import React from "react";
import Recruit from "../components/Recruit";
import "../scss/Recruitment.scss";

const Recruitment = ({ team }) => {
  return (
    <div className="recruitment">
      <h1 className="recruitment__heading">Recruitment</h1>
      <div className="recruitment__line-divide"></div>
      {team.recruits.map((item) => {
        return (
          <Recruit
            key={item.id}
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
            team={team}
          />
        );
      })}
    </div>
  );
};

export default Recruitment;
