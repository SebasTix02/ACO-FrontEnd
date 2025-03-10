import axios from 'axios';
import { API_URL } from '../data';

// Listar todas las rutas optimizadas
export const listarRutas = async () => {
  try {
    const respuesta = await axios.get(`${API_URL}/rutas`, {
      withCredentials: true,
    });
    return {
      exito: true,
      rutas: respuesta.data, // Se asume que el backend retorna un arreglo de rutas
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Obtener rutas por estado
export const obtenerRutasPorEstado = async (estado: any) => {
  try {
    const respuesta = await axios.get(`${API_URL}/rutas/estado/${estado}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      rutas: respuesta.data, // Se asume que el backend retorna un arreglo de rutas filtradas
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Obtener una ruta por su ID
export const obtenerRuta = async (id: any) => {
  try {
    const respuesta = await axios.get(`${API_URL}/rutas/${id}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      ruta: respuesta.data, // Se asume que el backend retorna la ruta solicitada
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Crear una nueva ruta optimizada
export const crearRuta = async (rutaData: any) => {

  try {
    const respuesta = await axios.post(`${API_URL}/rutas`, rutaData, {
      withCredentials: true,
    });
    return {
      exito: true,
      ruta: respuesta.data, // Se asume que retorna la ruta creada
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Actualizar una ruta optimizada
export const actualizarRuta = async (id: any, rutaData: any) => {
  try {
    const respuesta = await axios.put(`${API_URL}/rutas/${id}`, rutaData, {
      withCredentials: true,
    });
    return {
      exito: true,
      ruta: respuesta.data, // Se asume que retorna la ruta actualizada
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Eliminar una ruta optimizada
export const eliminarRuta = async (id: any) => {
  try {
    const respuesta = await axios.delete(`${API_URL}/rutas/${id}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      mensaje: respuesta.data.mensaje || 'Ruta eliminada correctamente',
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Actualizar el estado de los pedidos asociados a una ruta
export const actualizarEstadoPedidos = async (idRuta: any, nuevoEstado: any) => {
  try {
    const respuesta = await axios.post(`${API_URL}/rutas/${idRuta}/actualizar-estado/${nuevoEstado}`, null, {
      withCredentials: true,
    });
    return {
      exito: true,
      pedidos: respuesta.data, // Se asume que retorna los pedidos actualizados
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};
