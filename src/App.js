import "./App.css";
import { useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App(props) {
  const [team, setTeam] = useState(null);

  return (
    <div className="App" style={{ borderTop: `12px solid ${team.team_color}` }}>
      <Nav team={team} />
      <div className="main-container">
        <Main team={team} setTeam={setTeam} />
      </div>
    </div>
  );
}

export default App;
