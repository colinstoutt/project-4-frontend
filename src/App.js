import "./App.css";
import { useState, useEffect } from "react";
import { getUserFromToken } from "./services/tokenService";
import { logout } from "./services/signupService";
import ProtectedRoute from "./components/Protected-Route";

import Main from "./components/Main";
import Nav from "./components/Nav";

function App(props) {
  // setting userState
  const [userState, setUserState] = useState({ user: getUserFromToken() });

  function handleSignupAndLogIn() {
    let user = getUserFromToken();
    console.log("****************" + user);
    setUserState({ user: getUserFromToken() });
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
  }

  // fetching api
  const [data, setData] = useState(null);
  const URL = "http://localhost:3001/";

  // INDEX
  const getData = async () => {
    const fetchData = await fetch(URL).then((res) => res.json());
    setData(fetchData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {userState.user === null ? (
        <div></div>
      ) : (
        <Nav data={data} handleLogout={handleLogout} />
      )}
      <div className="main-container">
        <Main
          data={data}
          setData={setData}
          getData={getData}
          user={userState.user}
          handleSignupAndLogIn={handleSignupAndLogIn}
        />
      </div>
    </div>
  );
}

export default App;
