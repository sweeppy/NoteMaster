import { useState } from "react";

interface Props {
  alertText: string;
  onClose: () => void;
}
const DangerAlert = ({ alertText, onClose }: Props) => {
  const [closed, setClosed] = useState(false);

  const handleClosed = () => {
    setClosed(true);
    onClose();
  };

  return (
    <div
      className={`alert danger ${alertText && !closed ? "visible" : "hidden"}`}
    >
      {alertText}
      <button className="close-btn" onClick={handleClosed}>
        {" "}
        &times;
      </button>
    </div>
  );
};

export default DangerAlert;
