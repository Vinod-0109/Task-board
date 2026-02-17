import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Board from "./Components/Board";
import PrivateRoutes from "./Routes/PrivateRoutes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/board"
        element={
          <PrivateRoutes>
            <Board />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}
