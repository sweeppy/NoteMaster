import { useNavigate } from "react-router-dom";
interface Props {
  children: string;
}
const StartButton = ({ children }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Login");
  };
  return (
    <button className="btn-start main-font" onClick={handleClick}>
      {children}
    </button>
  );
};

export default StartButton;
