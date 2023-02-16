import { Routes, Route } from "react-router-dom";
// import Index from "../components/Index";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login {...props} />} />
        <Route path="/signup" element={<Signup {...props} />} />
      </Routes>
    </main>
  );
};

export default Main;
