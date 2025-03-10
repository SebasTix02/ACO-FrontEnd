import axios from 'axios';
import { API_URL } from '../data';

// Listar todas las ubicaciones temporales
export const listarUbicaciones = async () => {
  try {
    const respuesta = await axios.get(`${API_URL}/ubicaciones`, {
      withCredentials: true,
    });
    return {
      exito: true,
      ubicaciones: respuesta.data, // Se asume que el backend retorna un arreglo de ubicaciones
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Obtener las ubicaciones de un cliente específico por su código
export const obtenerUbicacionesPorCliente = async (codCliente: any) => {
  try {
    const respuesta = await axios.get(`${API_URL}/ubicaciones/cliente/${codCliente}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      ubicaciones: respuesta.data, // Se asume que el backend retorna las ubicaciones asociadas al cliente
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Obtener una ubicación por su ID
export const obtenerUbicacion = async (id: any) => {
  try {
    const respuesta = await axios.get(`${API_URL}/ubicaciones/${id}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      ubicacion: respuesta.data, // Se asume que el backend retorna la ubicación solicitada
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Crear una nueva ubicación temporal
export const crearUbicacion = async (ubicacionData: any) => {
  /* 
    ubicacionData debe incluir:
      - cod_cliente: string o número
      - latitud: number
      - longitud: number
      - nombre_contacto: string
      - direccion: string
  */
  try {
    const respuesta = await axios.post(`${API_URL}/ubicaciones`, ubicacionData, {
      withCredentials: true,
    });
    return {
      exito: true,
      ubicacion: respuesta.data, // Se asume que se retorna la ubicación creada
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Actualizar una ubicación temporal
export const actualizarUbicacion = async (id: any, ubicacionData: any) => {
  try {
    const respuesta = await axios.put(`${API_URL}/ubicaciones/${id}`, ubicacionData, {
      withCredentials: true,
    });
    return {
      exito: true,
      ubicacion: respuesta.data, // Se asume que se retorna la ubicación actualizada
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Eliminar una ubicación temporal
export const eliminarUbicacion = async (id: any) => {
  try {
    const respuesta = await axios.delete(`${API_URL}/ubicaciones/${id}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      mensaje: respuesta.data.mensaje || 'Ubicación eliminada correctamente',
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};
