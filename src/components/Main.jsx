import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Roster from "../pages/Roster";
import AddPlayer from "../pages/AddPlayer";
import EditPlayer from "../pages/EditPlayer";
import Schedule from "../pages/Schedule";
import Recruitment from "../pages/Recruitment";
import AddRecruit from "../pages/AddRecruit";
import RecruitShow from "../pages/EditRecruit";
import EditTeam from "../pages/EditTeam";
import CreateTeam from "../pages/CreateTeam";
import AddGame from "../pages/AddGame";
import EditGame from "../pages/EditGame";

import ProtectedRoute from "../components/Protected-Route";
import { getToken } from "../services/tokenService";

const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={props.user}>
              <Index data={props.data} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/team/create"
          element={
            <ProtectedRoute user={props.user}>
              <CreateTeam data={props.data} getData={props.getData} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roster"
          element={
            <ProtectedRoute user={props.user}>
              <Roster data={props.data} getData={props.getData} />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="roster/add"
          element={
            <ProtectedRoute user={props.user}>
              <AddPlayer
                data={props.data}
                getData={props.getData}
                setData={props.setData}
              />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/roster/:id"
          element={
            <ProtectedRoute user={props.user}>
              <EditPlayer data={props.data} getData={props.getData} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/schedule"
          element={
            <ProtectedRoute user={props.user}>
              <Schedule data={props.data} getData={props.getData} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/schedule/add"
          element={
            <ProtectedRoute user={props.user}>
              <AddGame data={props.data} getData={props.getData} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/schedule/:id"
          element={
            <ProtectedRoute user={props.user}>
              <EditGame data={props.data} getData={props.getData} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruitment"
          element={
            <ProtectedRoute user={props.user}>
              <Recruitment data={props.data} getData={props.getData} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruitment/add"
          element={
            <ProtectedRoute user={props.user}>
              <AddRecruit data={props.data} getData={props.getData} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruitment/:id"
          element={
            <ProtectedRoute user={props.user}>
              <RecruitShow data={props.data} getData={props.getData} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-team"
          element={
            <ProtectedRoute user={props.user}>
              <EditTeam data={props.data} getData={props.getData} />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<LoginPage {...props} />} />
        <Route path="/signup" element={<SignupPage {...props} />} />
      </Routes>
    </main>
  );
};

export default Main;
