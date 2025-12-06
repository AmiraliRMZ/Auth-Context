// Login.tsx
import { useState } from "react";
import { useAuth } from "./src/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login(username);
    navigate("/dashboard");
  };

  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username…"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
