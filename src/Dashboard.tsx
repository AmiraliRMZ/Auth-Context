import { useAuth } from "./AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h1>
        <button
          onClick={logout}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
