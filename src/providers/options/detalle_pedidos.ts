import axios from 'axios';
import { API_URL } from '../data';

// Obtener los detalles de un pedido dado su ID de pedido
export const obtenerDetallesPedido = async (idPedido: any) => {
  try {
    const respuesta = await axios.get(`${API_URL}/detallePedidos/pedido/${idPedido}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      detalles: respuesta.data, // Se asume que el backend retorna un arreglo de detalles para el pedido
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Obtener un detalle específico por su ID
export const obtenerDetalle = async (id: any) => {
  try {
    const respuesta = await axios.get(`${API_URL}/detallePedidos/${id}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      detalle: respuesta.data, // Se asume que el backend retorna el detalle solicitado
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Crear un nuevo detalle para un pedido
export const crearDetalle = async (detalleData: any) => {
  /* 
    detalleData debe incluir:
      - id_pedido: número o string que identifica el pedido
      - cod_art: código del artículo
      - cantidad: cantidad del artículo
      - precio_unitario: precio unitario del artículo
  */
  try {
    const respuesta = await axios.post(`${API_URL}/detallePedidos`, detalleData, {
      withCredentials: true,
    });
    return {
      exito: true,
      detalle: respuesta.data, // Se asume que se retorna el detalle creado
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Actualizar un detalle de pedido
export const actualizarDetalle = async (id: any, detalleData: any) => {
  /* 
    detalleData puede incluir:
      - cantidad: número
      - precio_unitario: número
  */
  try {
    const respuesta = await axios.put(`${API_URL}/detallePedidos/${id}`, detalleData, {
      withCredentials: true,
    });
    return {
      exito: true,
      detalle: respuesta.data, // Se asume que se retorna el detalle actualizado
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Eliminar un detalle de pedido
export const eliminarDetalle = async (id: any) => {
  try {
    const respuesta = await axios.delete(`${API_URL}/detallePedidos/${id}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      mensaje: respuesta.data.mensaje || 'Detalle eliminado correctamente',
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};
