import { useAuth } from "../auth/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // اگر لاگین بود → بفرستش به داشبورد
  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user]);

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}
