import { AuthProvider } from "@refinedev/core";
import { API_URL } from "./data";
import axios from "../config/axios";

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    try {
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
          message: error.message || "Login failed",
          name: error.name || "Invalid email or password",
        },
      };
    }
  },

  logout: async () => {
    console.log("Logging out...");
    try {
      await axios.post(
        `${API_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.error("Error during logout", error);
    }
    // Forzamos redirección y recarga para limpiar el estado de la app
    window.location.href = "/login";
    window.location.reload();
    return {
      success: true,
    };
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
      await axios.get(`${API_URL}/auth/check-session`, {
        withCredentials: true,
      });
      return { authenticated: true };
    } catch (error) {
      return {
        authenticated: false,
        redirectTo: "/login",
      };
    }
  },

  getIdentity: async () => {
    try {
      const response = await axios.get(`${API_URL}/auth/check-session`, {
        withCredentials: true,
      });
      return response.data || null;
    } catch (error) {
      return null;
    }
  },
};
