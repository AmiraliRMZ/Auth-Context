import { ReactNode } from "react";
import { useRequireAuth } from "./useRequireAuth";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useRequireAuth();

  if (loading) return <p>Loading...</p>;

  if (!user) return null; // redirect handled

  return <>{children}</>;
}
