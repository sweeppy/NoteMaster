import axios from "axios";

interface RegisterParams {
  email: string;
  username: string;
  password: string;
}

export const handleRegister = async ({
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
      console.log(data.token);
      console.log("Complete register");
      return true;
    } else {
      return null;
    }
  } catch (error) {
    console.error("An error occurred during registration:", error);
    return false;
  }
};
