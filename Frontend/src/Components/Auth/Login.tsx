import { useEffect, useState } from "react";
import "./Auth.css";
import AuthBtn from "./AuthBtn";
import AuthHeader from "./AuthHeader";
import { backendLogin } from "./login";
import { useNavigate } from "react-router-dom";
import DangerAlert from "../DangerAlert";
import React from "react";

const Login = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const [isButtonEnabled, setIsBtnEnabled] = useState(false);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsBtnEnabled(true);
    } else {
      setIsBtnEnabled(false);
    }
  }, [email, password]);

  const handleLogin = async () => {
    const response = await postLogin();
    if (response == null) {
      navigation("/notes");
    } else {
      setAlertText(response);
      setShowAlert(true);
    }
  };

  const postLogin = async () => {
    const response = await backendLogin({ email, password });
    return response;
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="container">
      <div className="auth-container">
        <AuthHeader>Login</AuthHeader>

        <input
          className="font-medium"
          placeholder="email"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="font-medium"
          placeholder="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <AuthBtn
          btnText="Continue"
          onClick={handleLogin}
          style={{
            opacity: isButtonEnabled ? 1 : 0.5,
            transform: isButtonEnabled ? "scale(1.1)" : "scale(1)",
            cursor: isButtonEnabled ? "pointer" : "",
          }}
          disabled={!isButtonEnabled}
        />
        <a href="/register" style={{ marginTop: "3%" }}>
          No account yet
        </a>
      </div>
      {showAlert && (
        <DangerAlert alertText={alertText} onClose={handleCloseAlert} />
      )}
    </div>
  );
};

export default Login;
