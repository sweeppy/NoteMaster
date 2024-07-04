interface Props {
  onClick: () => void;
  btnText: string;
  style: React.CSSProperties;
  disabled: boolean;
}

const AuthBtn = ({ onClick, btnText, style, disabled }: Props) => {
  return (
    <button
      className="authBtn main-font font-semi-medium"
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default AuthBtn;
