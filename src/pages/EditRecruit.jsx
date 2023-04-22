import React, { useState } from "react";
import Recruit from "../components/Recruit";
import "../scss/Recruitment.scss";
import AddRecruitWindow from "../components/AddRecruitWindow";
import EditRecruitWindow from "../components/EditRecruitWindow";
// import { getUserFromToken } from "../services/tokenService";
// const user = getUserFromToken();

const Recruitment = ({ data, getData }) => {
  const [toggleAddRecruit, setToggleAddRecruit] = useState(false);
  const [toggleEditRecruit, setToggleEditRecruit] = useState(true);

  const loaded = () => {
    const team = data.data;

    return (
      <div className="recruitment">
        {toggleAddRecruit ? (
          <AddRecruitWindow
            data={data}
            getData={getData}
            setToggleAddRecruit={setToggleAddRecruit}
          />
        ) : (
          <div></div>
        )}{" "}
        {toggleEditRecruit ? (
          <EditRecruitWindow
            data={data}
            getData={getData}
            setToggleEditRecruit={setToggleEditRecruit}
          />
        ) : (
          <div></div>
        )}
        <div className="recruitment__heading">
          <h1>Recruitment</h1>
        </div>
        <div className="recruitment__line-divide"></div>
        {data.recruits.map((item) => {
          return (
            <Recruit
              key={item.id}
              id={item._id}
              firstName={item.firstName}
              lastName={item.lastName}
              contact={item.contact}
              age={item.age}
              hometown={item.hometown}
              position={item.position}
              height={item.height}
              Weight={item.Weight}
              current_team={item.current_team}
              notes={item.notes}
              getData={getData}
              data={data}
              toggleEditRecruit={toggleEditRecruit}
              setToggleEditRecruit={setToggleEditRecruit}
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

export default Recruitment;
