// AuthContext.tsx
import { createContext, useReducer, useContext } from "react";

interface User {
  id: string;
  name: string;
}

interface State {
  user: User | null;
}

type Action =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
}

const AuthContext = createContext<{
  user: User | null;
  login: (username: string) => Promise<void>;
  logout: () => void;
} | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { user: null });

  const login = async (username: string) => {
    // fake API call
    await new Promise((r) => setTimeout(r, 1000));

    const fakeUser = { id: "123", name: username };
    dispatch({ type: "LOGIN", payload: fakeUser });
  };

  const logout = () => dispatch({ type: "LOGOUT" });

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth باید داخل AuthProvider استفاده شود");
  return ctx;
}
