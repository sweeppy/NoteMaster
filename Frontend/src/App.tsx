import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import "./App.css";
import Notes from "./Components/NotesPage/NotesPage.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="notes" element={<Notes />} />
      </Routes>
    </Router>
  );
};

export default App;
