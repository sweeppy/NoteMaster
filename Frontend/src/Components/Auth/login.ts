import axios from "axios";

interface loginParams {
  email: string;
  password: string;
}
export const backendLogin = async ({ email, password }: loginParams) => {
  try {
    const response = await axios.post("http://localhost:5062/Auth/login", {
      email: email,
      password: password,
    });
    if (response.status == 200) {
      const token = response.data.token;
      localStorage.setItem("token", token);
      return null;
    } else {
      return response.data;
    }
  } catch (error: any) {
    return error.response.data;
  }
};
