import AuthBtn from "./AuthBtn";
import AuthHeader from "./AuthHeader";

const SignUp = () => {
  return (
    <div className="container">
      <div className="auth-container">
        <AuthHeader>Create account</AuthHeader>
        <input className="font-medium" placeholder="email" type="text" />
        <input className="font-medium" placeholder="username" type="text" />
        <input className="font-medium" placeholder="password" type="password" />
        <AuthBtn
          btnText="Continue"
          onClick={() => console.log("register")}
        ></AuthBtn>
        <a href="/login" style={{ marginTop: "3%" }}>
          Already registered
        </a>
      </div>
    </div>
  );
};

export default SignUp;
