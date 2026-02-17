import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const auth =
    JSON.parse(localStorage.getItem("auth")) ||
    JSON.parse(sessionStorage.getItem("auth"));

  return auth?.isAuth ? children : <Navigate to="/" />;
}
