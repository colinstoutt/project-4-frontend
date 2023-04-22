// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "../scss/AddGameWindow.scss";
// import { useNavigate } from "react-router-dom";

// const AddGameWindow = ({ data, getData, userTeam, setToggleAddGame }) => {
//   const navigate = useNavigate();
//   const URL = "http://localhost:3002/manager/game/";
//   const [gameForm, setGameForm] = useState({
//     location: "",
//     address: "",
//     date: "",
//     time: "",
//     homeTeam: "",
//     awayTeam: "",
//     team: userTeam[0],
//   });

//   async function createGame(form) {
//     await fetch(URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     });
//     getData();
//   }
//   function handleChange(e) {
//     setGameForm({
//       ...gameForm,
//       [e.target.name]: e.target.value,
//     });
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     createGame(gameForm);
//     setGameForm({
//       location: "",
//       address: "",
//       date: "",
//       time: "",
//       homeTeam: "",
//       awayTeam: "",
//       team: userTeam[0],
//     });
//     setToggleAddGame(false);
//     navigate("/schedule");
//   }

//   return (
//     <div
//       className="gameAdd"
//       style={{ borderLeft: `10px solid ${userTeam[0].team_color}` }}
//     >
//       <h1 className="gameAdd__heading">Add Game</h1>
//       <div className="gameAdd__line-divide"></div>
//       <div className="gameadd__container">
//         <form onSubmit={handleSubmit}>
//           <div className="game__time">
//             <input
//               onChange={handleChange}
//               value={gameForm.date}
//               className="game__input"
//               type="date"
//               name="date"
//               required
//               placeholder="mm-dd-yyyy"
//               size="11"
//             />
//             <input
//               onChange={handleChange}
//               value={gameForm.time}
//               className="game__input"
//               type="text"
//               name="time"
//               placeholder="7:00 PM"
//               size="11"
//             />
//           </div>
//           <div className="game__matchup">
//             <input
//               onChange={handleChange}
//               value={gameForm.awayTeam}
//               className="game__input"
//               type="text"
//               name="awayTeam"
//               placeholder="Away"
//               size="11"
//             />
//             @
//             <input
//               onChange={handleChange}
//               value={gameForm.homeTeam}
//               className="game__input"
//               type="text"
//               name="homeTeam"
//               placeholder="Home"
//               size="11"
//             />
//           </div>
//           <div className="game__location">
//             <input
//               onChange={handleChange}
//               value={gameForm.location}
//               className="game__input"
//               type="text"
//               name="location"
//               placeholder="Location"
//               size="20"
//             />
//             <input
//               onChange={handleChange}
//               value={gameForm.address}
//               className="game__input"
//               type="text"
//               name="address"
//               placeholder="address"
//               size="20"
//             />
//           </div>
//           <button className="game__submit">Submit</button>
//           <button
//             onClick={() => setToggleAddGame(false)}
//             className="playerAdd__cancel"
//           >
//             Cancel
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddGameWindow;
