import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
// import LoginPage from "../pages/LoginPage";
// import SignupPage from "../pages/SignupPage";
import Roster from "../pages/Roster";
import Schedule from "../pages/Schedule";
import Recruitment from "../pages/Recruitment";
import EditTeam from "../pages/EditTeam";
import SceduleEdit from "../pages/SceduleEdit";
// import ProtectedRoute from "../components/Protected-Route";

const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index team={props.team} />} />
        <Route
          path="/roster"
          element={<Roster team={props.team} getTeam={props.getTeam} />}
        />
        <Route
          path="/schedule"
          element={<Schedule team={props.team} getTeam={props.getTeam} />}
        />
        <Route
          path="/recruitment"
          element={<Recruitment team={props.team} />}
        />
        <Route
          path="/edit-team"
          element={<EditTeam team={props.team} getTeam={props.getTeam} />}
        />
        <Route
          path="/edit-schedule"
          element={<SceduleEdit team={props.team} getTeam={props.getTeam} />}
        />
        {/* <Route path="/login" element={<LoginPage {...props} />} />
        <Route path="/signup" element={<SignupPage {...props} />} /> */}
      </Routes>
    </main>
  );
};

export default Main;
