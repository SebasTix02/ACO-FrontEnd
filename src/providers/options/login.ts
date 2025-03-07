import axios from 'axios';
import { API_URL } from '../data';

export const loginUser = async (loginData: { usuario: string; clave: string }) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, loginData);
        return {
            success: true,
            user: response.data.usuario // Asegúrate que el backend no envía el token en la respuesta
        };
    } catch (error: any) {
        return {
            success: false,
            error: {
                message: error.response?.data?.error || 'Error de conexión con el servidor',
                status: error.response?.status
            }
        };
    }
};

// Añadir función para verificar sesión
export const checkSession = async () => {
    try {
        const response = await axios.get(`${API_URL}/auth/check-session`, {
            withCredentials: true
        });

        return {
            success: true,
            user: response.data.user // Asegúrate que el backend envía los datos del usuario en response.data.user
        };
    } catch (error) {
        return {
            success: false,
            error: 'Sesión no válida'
        };
    }
};

export const logoutUser = async () => {
    try {
      const response = await axios.post('/auth/logout', {}, {
        withCredentials: true // ¡IMPORTANTE! Envía la cookie
      });
      
      // Forzar recarga para limpiar estado
      window.location.reload();
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: 'Error al cerrar sesión' 
      };
    }
  };