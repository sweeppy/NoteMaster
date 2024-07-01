import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
