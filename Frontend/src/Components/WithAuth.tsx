import { Navigate } from "react-router-dom";
import { JwtPayload, jwtDecode } from "jwt-decode";

const withAuth = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return <Navigate to="/login" />;
    }

    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp && decodedToken.exp < currentTime) {
        // Токен истек
        localStorage.removeItem("token");
        return <Navigate to="/login" />;
      }
    } catch (error) {
      // Невалидный токен
      localStorage.removeItem("token");
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
