import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "intern@demo.com" && password === "intern123") {
      const auth = { isAuth: true, email };
      if (remember) localStorage.setItem("auth", JSON.stringify(auth));
      sessionStorage.setItem("auth", JSON.stringify(auth));
      navigate("/board");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        <input type="checkbox" onChange={(e) => setRemember(e.target.checked)} /> Remember me
      </label>
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
