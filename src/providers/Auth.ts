import { AuthProvider } from "@refinedev/core";
import { API_URL } from "./data";
import axios from "../config/axios";

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    try {
      // Cambiar a solicitud directa con axios para manejar cookies
      await axios.post(
        `${API_URL}/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      return {
        success: true,
        redirectTo: "/",
      };
    } catch (e) {
      const error = e as Error;
      return {
        success: false,
        error: {
          message: "message" in error ? error.message : "Login failed",
          name: "name" in error ? error.name : "Invalid email or password",
        },
      };
    }
  },

  logout: async () => {
    try {
      await axios.post(
        `${API_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
    } finally {
      return {
        success: true,
        redirectTo: "/login",
      };
    }
  },

  onError: async (error) => {
    if (error.statusCode === 401) {
      return {
        logout: true,
      };
    }
    return { error };
  },

  check: async () => {
    try {
      // Verificar sesión usando el endpoint del backend
      await axios.get(`${API_URL}/auth/check-session`, {
        withCredentials: true,
      });
      return {
        authenticated: true,
      };
    } catch (error) {
      return {
        authenticated: false,
        redirectTo: "/login",
      };
    }
  },

  getIdentity: async () => {
    try {
      // Obtener datos del usuario desde el backend
      const response = await axios.get(`${API_URL}/auth/check-session`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return undefined;
    }
  },
};