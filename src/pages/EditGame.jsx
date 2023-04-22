// import React from "react";
// import { useState } from "react";
// import "../scss/Schedule.scss";
// import Game from "../components/Game";
// import { Link } from "react-router-dom";
// import AddGameWindow from "../components/AddGameWindow";
// import EditGameWindow from "../components/EditGameWindow";

// import { getUserFromToken } from "../services/tokenService";
// const user = getUserFromToken();

// const Schedule = ({ data, getData }) => {
//   const [toggleAddGame, setToggleAddGame] = useState(false);
//   const [toggleEditGame, setToggleEditGame] = useState(true);

//   const loaded = () => {
//     const teams = data.data;
//     const userTeam = teams.filter((team) => team.user === user._id);
//     data.games.sort(function (a, b) {
//       return Date.parse(a.date) - Date.parse(b.date);
//     });

//     return (
//       <div className="schedule">
//         {toggleAddGame ? (
//           <AddGameWindow
//             teams={teams}
//             userTeam={userTeam}
//             data={data}
//             getData={getData}
//             setToggleAddGame={setToggleAddGame}
//           />
//         ) : (
//           <></>
//         )}
//         {toggleEditGame ? (
//           <EditGameWindow
//             teams={teams}
//             userTeam={userTeam}
//             data={data}
//             getData={getData}
//             setToggleEditGame={setToggleEditGame}
//           />
//         ) : (
//           <></>
//         )}
//         <div className="schedule__heading-container">
//           <h1 className="schedule__heading">Schedule</h1>
//         </div>
//         <div className="schedule__line-divide"></div>
//         {data.games
//           .filter((game) => game.team === userTeam[0]._id)
//           .map((item) => {
//             return (
//               <Game
//                 key={item.id}
//                 id={item._id}
//                 location={item.location}
//                 date={item.date}
//                 time={item.time}
//                 address={item.address}
//                 homeTeam={item.homeTeam}
//                 awayTeam={item.awayTeam}
//                 data={data}
//                 getData={getData}
//                 setToggleEditGame={setToggleEditGame}
//               />
//             );
//           })}
//       </div>
//     );
//   };
//   const loading = () => {
//     return <h1>Loading...</h1>;
//   };

//   return <div>{data ? loaded() : loading()}</div>;
// };

// export default Schedule;
