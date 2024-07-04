import axios from "axios";

interface RegisterParams {
  email: string;
  username: string;
  password: string;
}

export const backendRegister = async ({
  email,
  username,
  password,
}: RegisterParams) => {
  try {
    const response = await axios.post("http://localhost:5062/Auth/register", {
      email: email,
      username: username,
      password: password,
    });
    if (response.status === 200) {
      const data = response.data;
      localStorage.setItem("token", data.token);
      return null;
    } else {
      return response.data;
    }
  } catch (error: any) {
    return error.response.data;
  }
};
