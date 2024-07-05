interface Props {
  alertText: string;
  onClose: () => void;
}

const SuccessAlert = ({ alertText, onClose }: Props) => {
  return (
    <div className={`alert success ${alertText ? "visible" : "hidden"}`}>
      {alertText}
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default SuccessAlert;
