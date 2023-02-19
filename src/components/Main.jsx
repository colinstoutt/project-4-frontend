import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
// import LoginPage from "../pages/LoginPage";
// import SignupPage from "../pages/SignupPage";
import Roster from "../pages/Roster";
import Schedule from "../pages/Schedule";
import Recruitment from "../pages/Recruitment";
// import ProtectedRoute from "../components/Protected-Route";

const Main = (props) => {
  const URL = "http://localhost:8000/manager/team/10/";
  const [team, setTeam] = useState(null);

  // INDEX
  const getTeam = async () => {
    const data = await fetch(URL).then((res) => res.json());
    setTeam(data);
  };

  useEffect(() => {
    getTeam();
  }, []);

  console.log(team);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Index team={team} />} />
        <Route path="/roster" element={<Roster team={team} />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/recruitment" element={<Recruitment />} />
        {/* <Route path="/login" element={<LoginPage {...props} />} />
        <Route path="/signup" element={<SignupPage {...props} />} /> */}
      </Routes>
    </main>
  );
};

export default Main;
