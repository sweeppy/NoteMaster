import { useState } from "react";
import "./Auth.css";
import AuthBtn from "./AuthBtn";
import AuthHeader from "./AuthHeader";
import { handleLogin } from "./login";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const postLogin = async () => {
    console.log("login peocces...");
    const isLogin = await handleLogin({ email, password });
    if (isLogin === true) {
      navigation("/notes");
    } else if (isLogin == null) {
      //alert
    } else {
      //alert
    }
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

        <AuthBtn btnText="Continue" onClick={postLogin} />
        <a href="/register" style={{ marginTop: "3%" }}>
          No account yet
        </a>
      </div>
    </div>
  );
};

export default Login;
