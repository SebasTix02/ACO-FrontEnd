import React, { createContext, useContext, useEffect, useState } from "react";
import { checkSession, logoutUser } from "../providers/options/login";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  user: any;
  loading: boolean;
  logout: () => Promise<void>;
  refreshUser: (force?: boolean) => Promise<void>; // ✅ Nueva función para forzar actualización
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sessionInvalid, setSessionInvalid] = useState(false); // NUEVO
  useEffect(() => {
    refreshUser();
  }, []);
  const navigate = useNavigate();

  // Función para actualizar el usuario
  const verifySession = async (force = false) => {
    if (sessionInvalid && !force) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const result = await checkSession();
      if (result.success) {
        setUser(result.user);
        setSessionInvalid(false);
      } else {
        setUser(null);
        setSessionInvalid(true);
      }
    } catch (error) {
      setUser(null);
      setSessionInvalid(true);
    } finally {
      setLoading(false);
    }
  };
  
  // Nueva función para forzar actualización manual
  const refreshUser = async (force = false) => {
    await verifySession(force);
  };

  useEffect(() => {
    verifySession();
  }, []);

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout fallido:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, refreshUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
