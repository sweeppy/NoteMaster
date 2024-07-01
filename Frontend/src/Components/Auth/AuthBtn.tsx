interface Props {
  onClick: () => void;
  btnText: string;
}

const AuthBtn = ({ onClick, btnText }: Props) => {
  return (
    <button className="authBtn main-font font-semi-medium" onClick={onClick}>
      {btnText}
    </button>
  );
};

export default AuthBtn;
