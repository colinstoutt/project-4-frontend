// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../scss/auth.scss";
// import Cookies from "js-cookie";

// function LoginPage() {
//   const csrftoken = Cookies.get("csrftoken");
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     first_name: "",
//     last_name: "",
//     password: "",
//     confirm_password: "",
//   });

//   const signup = async () => {
//     await fetch("http://localhost:8000/auth/signup/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include", // <- THIS
//       body: JSON.stringify({
//         username: form.username,
//         email: form.email,
//         first_name: form.first_name,
//         last_name: form.last_name,
//         password: form.password,
//         confirm_password: form.confirm_password,
//       }),
//     });
//   };

//   function handleChange(e) {
//     setForm((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   }

//   // function

//   return (
//     <div>
//       <form className="auth__form" onSubmit={signup}>
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
//         <label htmlFor="email">Email</label>
//         <br />
//         <input
//           type="text"
//           value={form.email}
//           name="email"
//           onChange={handleChange}
//           className="auth__form-input"
//         />
//         <br />
//         <label htmlFor="first_name">First Name</label>
//         <br />
//         <input
//           type="text"
//           value={form.first_name}
//           name="first_name"
//           onChange={handleChange}
//           className="auth__form-input"
//         />
//         <br />
//         <label htmlFor="last_name">Last Name</label>
//         <br />
//         <input
//           type="text"
//           value={form.last_name}
//           name="last_name"
//           onChange={handleChange}
//           className="auth__form-input"
//         />
//         <br />
//         <label htmlFor="password">Password</label>
//         <br />
//         <input
//           type="text"
//           value={form.password}
//           name="password"
//           onChange={handleChange}
//           className="auth__form-input"
//         />
//         <br />
//         <label htmlFor="confirm_password">Confirm Password</label>
//         <br />
//         <input
//           type="text"
//           value={form.confirm_password}
//           name="confirm_password"
//           onChange={handleChange}
//           className="auth__form-input"
//         />
//         <br />
//         <button>Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;
