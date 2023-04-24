import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Roster from "../pages/Roster";
import EditPlayer from "../pages/EditPlayer";
import Schedule from "../pages/Schedule";
import Recruitment from "../pages/Recruitment";
import EditRecruit from "../pages/EditRecruit";
import EditTeam from "../pages/EditTeam";
import CreateTeam from "../pages/CreateTeam";
import EditGame from "../pages/EditGame";

const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index data={props.data} getData={props.getData} />}
        />
        {/* <Route
          path="/team/create"
          element={<CreateTeam data={props.data} getData={props.getData} />}
        /> */}
        <Route
          path="/roster"
          element={<Roster data={props.data} getData={props.getData} />}
        />
        <Route
          path="/roster/:id"
          element={<EditPlayer data={props.data} getData={props.getData} />}
        />
        <Route
          path="/schedule"
          element={<Schedule data={props.data} getData={props.getData} />}
        />
        <Route
          path="/schedule/:id"
          element={<EditGame data={props.data} getData={props.getData} />}
        />
        <Route
          path="/recruitment"
          element={<Recruitment data={props.data} getData={props.getData} />}
        />
        <Route
          path="/recruitment/:id"
          element={<EditRecruit data={props.data} getData={props.getData} />}
        />
        <Route
          path="/team/:id"
          element={<EditTeam data={props.data} getData={props.getData} />}
        />
      </Routes>
    </main>
  );
};

export default Main;
