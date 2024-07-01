import "./Auth.css";
import AuthBtn from "./AuthBtn";
import AuthHeader from "./AuthHeader";
const Login = () => {
  return (
    <div className="container">
      <div className="auth-container">
        <AuthHeader>Login</AuthHeader>

        <input className="font-medium" placeholder="email" type="text" />
        <input className="font-medium" placeholder="password" type="password" />

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
