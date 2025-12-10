import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

interface User {
  id: number;
  name: string;     // این همون اسمیه که کاربر وارد می‌کنه
  username: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // بازیابی از localStorage
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
    setLoading(false);
  }, []);

  const login = async (username: string, _password: string) => {
    // فقط از اسم ورودی استفاده می‌کنیم
    const createdUser: User = {
      id: Date.now(),     // یک آیدی تصادفی ساده
      name: username,     // <-- همین نکته مهمه!
      username,
    };

    // ذخیره کاربر
    setUser(createdUser);
    localStorage.setItem("user", JSON.stringify(createdUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
