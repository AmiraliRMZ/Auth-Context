import { useAuth } from "../auth/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hello, {user?.name}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
