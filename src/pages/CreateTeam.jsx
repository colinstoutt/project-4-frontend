// import React, { useEffect } from "react";
// import "../scss/EditTeam.scss";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getUserFromToken } from "../services/tokenService";
// const user = getUserFromToken();

// const CreateTeam = ({ data, getData }) => {
//   const navigate = useNavigate();
//   const URL = "http://localhost:3002/manager/team/";

//   const [teamForm, setTeamForm] = useState({
//     user: user._id,
//     city: "",
//     mascot: "",
//     logo_url: "",
//     team_color: "",
//   });

//   async function updateTeam(form) {
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
//     setTeamForm({
//       ...teamForm,
//       [e.target.name]: e.target.value,
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     updateTeam(teamForm);
//     setTeamForm({
//       user: user._id,
//       city: "",
//       mascot: "",
//       logo_url: "",
//       team_color: "",
//     });
//     navigate("/team");
//   }

//   // let userTeam;
//   // useEffect(() => {
//   //   const teams = data.data;
//   //   userTeam = teams.filter((team) => team.user === user._id);
//   //   // if (userTeam.length === 1) {
//   //   //   navigate("/");
//   //   // }
//   // }, []);

//   const loaded = () => {
//     return (
//       <div className="team">
//         <h1 className="team__heading">Create Team</h1>
//         <div className="team__line-divide"></div>

//         <div className="team__form-container">
//           <form
//             style={{ borderLeft: `10px solid #4f8ff0` }}
//             onSubmit={handleSubmit}
//             className="team__form-container-form"
//           >
//             <label className="team__form-label" htmlFor="city">
//               City
//             </label>
//             <br />
//             <input
//               onChange={handleChange}
//               className="team__form-container-input"
//               type="text"
//               name="city"
//               placeholder="City"
//               value={teamForm.city}
//               size="25"
//             />
//             <br />
//             <label className="team__form-container-label" htmlFor="mascot">
//               Mascot
//             </label>
//             <br />
//             <input
//               onChange={handleChange}
//               className="team__form-container-input"
//               type="text"
//               name="mascot"
//               placeholder="Mascot"
//               value={teamForm.mascot}
//               size="25"
//             />
//             <br />
//             <label className="team__form-label" htmlFor="logo">
//               Logo <span className="team__form-input-span">(URL)</span>
//             </label>
//             <br />
//             <input
//               onChange={handleChange}
//               className="team__form-container-input"
//               type="text"
//               name="logo_url"
//               placeholder="Logo (URL)"
//               value={teamForm.logo_url}
//               size="25"
//             />
//             <br />
//             <label className="team__form-label" htmlFor="team_color">
//               Team Color
//             </label>
//             <br />
//             <input
//               onChange={handleChange}
//               className="team__form-container-input"
//               type="text"
//               name="team_color"
//               placeholder="Team Color (#000000)"
//               value={teamForm.team_color}
//               size="25"
//             />
//             <br />
//             <button className="team__submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     );
//   };
//   const loading = () => {
//     return <h1>Loading...</h1>;
//   };
//   return <div>{data ? loaded() : loading()}</div>;
// };

// export default CreateTeam;
