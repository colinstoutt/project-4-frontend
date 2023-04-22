import "./App.css";
import { useState, useEffect } from "react";
// import { getUserFromToken } from "./services/tokenService";
// import { logout } from "./services/signupService";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App(props) {
  // setting userState
  // const [userState, setUserState] = useState({ user: getUserFromToken() });

  // function handleSignupAndLogIn() {
  //   let user = getUserFromToken();
  //   console.log("****************" + user);
  //   setUserState({ user: getUserFromToken() });
  // }

  // function handleLogout() {
  //   logout();
  //   setUserState({ user: null });
  // }

  // fetching api
  const [data, setData] = useState(null);
  const URL = "http://localhost:3002/";
  // INDEX
  const getData = async () => {
    const fetchData = await fetch(URL).then((res) => res.json());
    setData(fetchData);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <Nav data={data} />
      <div className="main-container">
        <Main data={data} setData={setData} getData={getData} />
      </div>
    </div>
  );
}

export default App;
