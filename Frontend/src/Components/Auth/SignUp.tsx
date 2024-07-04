import { useEffect, useState } from "react";
import { handleRegister } from "./register";
import AuthBtn from "./AuthBtn";
import AuthHeader from "./AuthHeader";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsBtnEnabled(true);
    } else {
      setIsBtnEnabled(false);
    }
  });

  const postRegister = async () => {
    console.log("registration");
    const isRegistered = await handleRegister({ email, username, password });
    if (isRegistered == true) {
      navigate("/notes");
    } else if (isRegistered == false) {
      //alert
    } else {
      //alert
    }
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
    </div>
  );
};

export default SignUp;
