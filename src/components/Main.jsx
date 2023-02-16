import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Login from "../pages/LoginPage";
import Signup from "../pages/SignupPage";

const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login {...props} />} />
        <Route path="/signup" element={<Signup {...props} />} />
      </Routes>
    </main>
  );
};

export default Main;
