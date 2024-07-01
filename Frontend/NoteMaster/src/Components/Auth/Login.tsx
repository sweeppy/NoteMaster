import "./Auth.css";
import AuthBtn from "./AuthBtn";
import AuthHeader from "./AuthHeader";
const Login = () => {
  return (
    <div className="container">
      <div className="login-container">
        <AuthHeader>Login</AuthHeader>
        <div className="inputs">
          <input className="font-medium" placeholder="email" type="text" />
          <input
            className="font-medium"
            placeholder="password"
            type="password"
          />
        </div>
        <AuthBtn
          btnText="Continue"
          onClick={() => console.log("login")}
        ></AuthBtn>
        <a href="/register" style={{ marginTop: "3%" }}>
          No account yet
        </a>
      </div>
    </div>
  );
};

export default Login;
