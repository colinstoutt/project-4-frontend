import "./App.css";
import { useState, useEffect } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App(props) {
  const [team, setTeam] = useState(null);
  const URL = "http://localhost:8000/manager/team/12/";

  // INDEX
  const getTeam = async () => {
    const data = await fetch(URL).then((res) => res.json());
    setTeam(data);
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <div
      className="App"
      style={
        team
          ? { borderTop: `12px solid ${team.team_color}` }
          : { borderTop: `12px solid black` }
      }
    >
      <Nav team={team} />
      <div className="main-container">
        <Main team={team} setTeam={setTeam} getTeam={getTeam} />
      </div>
    </div>
  );
}

export default App;
