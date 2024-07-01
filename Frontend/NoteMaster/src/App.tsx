import Header from "./Components/Header";
import "./App.css";
import StartButton from "./Components/WelcomePage/StartButton";

const App = () => {
  const welcomeText = "plan, write, learn, stay productive";
  return (
    <div className="header-container">
      <Header>NoteMaster</Header>
      <div className="text-under-header">{welcomeText}</div>
      <StartButton>Start</StartButton>
    </div>
  );
};

export default App;
