interface Props {
  alertText: string;
  onClose: () => void;
}
const DangerAlert = ({ alertText, onClose }: Props) => {
  return (
    <div className={`alert danger ${alertText ? "visible" : "hidden"}`}>
      {alertText}
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default DangerAlert;
