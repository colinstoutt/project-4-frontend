// import React from "react";
// import "../scss/EditTeam.scss";
// import { useState } from "react";
// import { useParams, useNavigate } from "react-router";
// import { getUserFromToken } from "../services/tokenService";
// const user = getUserFromToken();

// const EditTeam = ({ data, getData }) => {
//   const navigate = useNavigate();
//   const URL = "http://localhost:3002/manager/team/";
//   const { id } = useParams();
//   const teams = data && data.data;
//   const team = teams.find((team) => team._id === id);

//   const [teamForm, setTeamForm] = useState(team);

//   async function updateTeam(form, id) {
//     await fetch(`${URL}${id}`, {
//       method: "PUT",
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
//     updateTeam(teamForm, id);
//     navigate("/");
//   }

//   const loaded = () => {
//     const userTeam = teams.filter((team) => team.user === user._id);
//     console.log(userTeam);

//     return (
//       <div className="team">
//         <h1 className="team__heading">Edit Team</h1>
//         <div className="team__line-divide"></div>

//         <div className="team__form-container">
//           <form
//             onSubmit={handleSubmit}
//             className="team__form-container-form"
//             style={{ borderLeft: `10px solid ${userTeam[0].team_color}` }}
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
//               placeholder={userTeam[0].city}
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
//               placeholder={userTeam[0].mascot}
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
//               placeholder={userTeam[0].logo_url}
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
//               placeholder={userTeam[0].team_color}
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

// export default EditTeam;
