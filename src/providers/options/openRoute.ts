import axios from 'axios';
import { API_URL } from '../data';

export const optimizarRuta = async (
  coordenadasInicio: number[],
  ubicaciones: { tracking_id: string; cluster: number; lat: number; lng: number }[]
) => {
  try {
    const body = {
      coordenadasInicio,
      ubicaciones,
    };

    const respuesta = await axios.post(
      `${API_URL}/optimizacion-rutas/optimizar`,
      body,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return {
      exito: true,
      rutaOptimizada: respuesta.data, // Se asume que el backend retorna la ruta optimizada
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};
