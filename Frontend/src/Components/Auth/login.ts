import axios from "axios";

interface loginParams {
  email: string;
  password: string;
}
export const handleLogin = async ({ email, password }: loginParams) => {
  try {
    const response = await axios.post("http://localhost:5062/Auth/login", {
      email: email,
      password: password,
    });
    if (response.status == 200) {
      console.log("successful login");
      const token = response.data.token;
      localStorage.setItem("token", token);
      return true;
    } else {
      console.error("login status code in not 200");
      return null;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
