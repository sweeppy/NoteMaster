import { useEffect, useState } from "react";
import { backendRegister } from "./register";
import AuthBtn from "./AuthBtn";
import AuthHeader from "./AuthHeader";
import { useNavigate } from "react-router-dom";
import DangerAlert from "../DangerAlert";

const SignUp = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);
  const [alertText, setAlertText] = useState("");

  useEffect(() => {
    if (email !== "" && password !== "" && username !== "") {
      setIsBtnEnabled(true);
    } else {
      setIsBtnEnabled(false);
    }
  });

  const postRegister = async () => {
    const response = await backendRegister({ email, username, password });
    if (response == null) {
      navigation("/notes");
    } else {
      setAlertText(response);
    }
  };

  const handleCloseAlert = () => {
    setAlertText("");
  };

  return (
    <div className="container">
      <div className="auth-container">
        <AuthHeader>Create account</AuthHeader>
        <input
          className="font-medium"
          placeholder="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="font-medium"
          placeholder="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="font-medium"
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <AuthBtn
          btnText="Continue"
          onClick={postRegister}
          style={{ opacity: isBtnEnabled ? 1 : 0.5 }}
          disabled={!isBtnEnabled}
        ></AuthBtn>
        <a href="/login" style={{ marginTop: "3%" }}>
          Already registered
        </a>
      </div>
      <DangerAlert alertText={alertText} onClose={handleCloseAlert} />
    </div>
  );
};

export default SignUp;
