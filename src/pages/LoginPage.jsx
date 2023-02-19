// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../scss/auth.scss";
// import getCookie from "../components/CSRFToken";

// function LoginPage({ userState, setUserState }) {
//   const navigate = useNavigate();
//   const csrftoken = getCookie("csrftoken");

//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//   });

//   console.log(userState);

//   const login = async (person) => {
//     await fetch("http://localhost:8000/auth/login/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include", // <- THIS
//       body: JSON.stringify({
//         username: form.username,
//         password: form.password,
//       }),
//     });
//     setUserState(csrftoken);
//     console.log(userState);
//   };

//   function handleChange(e) {
//     setForm((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     login(form);
//     navigate("/", { replace: true });
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="auth__form">
//         <legend>Sign In</legend>
//         <label htmlFor="username">Username</label>
//         <br />
//         <input
//           type="text"
//           value={form.username}
//           name="username"
//           onChange={handleChange}
//           className="auth__form-input"
//         />
//         <br />
//         <label htmlFor="password">Password</label>
//         <br />
//         <input
//           type="password"
//           value={form.password}
//           name="password"
//           onChange={handleChange}
//           className="auth__form-input"
//         />
//         <br />
//         <button>Sign In</button>
//       </form>
//       <Link to="/signup">Signup</Link>
//     </div>
//   );
// }

// export default LoginPage;
