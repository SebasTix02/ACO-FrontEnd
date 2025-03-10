import axios from 'axios';
import { API_URL } from '../data';

// Obtener los detalles de un pedido dado su ID de pedido
export const listarArticulos = async () => {
    try {
      const respuesta = await axios.get(`${API_URL}/articulos`, {
        withCredentials: true,
      });
      return {
        exito: true,
        articulos: respuesta.data, 
      };
    } catch (error: any) {
      return {
        exito: false,
        error: error.response?.data?.error || 'Error de conexión con el servidor',
      };
    }
  };