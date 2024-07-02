import Header from "./Header";
import StartButton from "./StartButton";

const WelcomePage = () => {
  const welcomeText = "plan, write, learn, stay productive";
  return (
    <div className="header-container">
      <Header>NoteMaster</Header>
      <div className="text-under-header">{welcomeText}</div>
      <StartButton>Get Started</StartButton>
    </div>
  );
};

export default WelcomePage;
