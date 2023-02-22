import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
// import LoginPage from "../pages/LoginPage";
// import SignupPage from "../pages/SignupPage";
import Roster from "../pages/Roster";
import AddPlayer from "../pages/AddPlayer";
import EditPlayer from "../pages/EditPlayer";
import Schedule from "../pages/Schedule";
import Recruitment from "../pages/Recruitment";
import AddRecruit from "../pages/AddRecruit";
import RecruitShow from "../pages/EditRecruit";
import EditTeam from "../pages/EditTeam";
import AddGame from "../pages/AddGame";
import EditGame from "../pages/EditGame";
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
          path="roster/add"
          element={<AddPlayer team={props.team} getTeam={props.getTeam} />}
        />
        <Route
          path="/roster/:id"
          element={<EditPlayer team={props.team} getTeam={props.getTeam} />}
        />
        <Route
          path="/schedule"
          element={<Schedule team={props.team} getTeam={props.getTeam} />}
        />
        <Route
          path="/schedule/add"
          element={<AddGame team={props.team} getTeam={props.getTeam} />}
        />
        <Route
          path="/schedule/:id"
          element={<EditGame team={props.team} getTeam={props.getTeam} />}
        />
        <Route
          path="/recruitment"
          element={<Recruitment team={props.team} getTeam={props.getTeam} />}
        />
        <Route
          path="/recruitment/add"
          element={<AddRecruit team={props.team} getTeam={props.getTeam} />}
        />
        <Route
          path="/recruitment/:id"
          element={<RecruitShow team={props.team} getTeam={props.getTeam} />}
        />
        <Route
          path="/edit-team"
          element={<EditTeam team={props.team} getTeam={props.getTeam} />}
        />

        {/* <Route path="/login" element={<LoginPage {...props} />} />
        <Route path="/signup" element={<SignupPage {...props} />} /> */}
      </Routes>
    </main>
  );
};

export default Main;
