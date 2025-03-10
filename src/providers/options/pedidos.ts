import axios from 'axios';
import { API_URL } from '../data';

// Listar todos los pedidos
export const listarPedidos = async () => {
  try {
    const respuesta = await axios.get(`${API_URL}/pedidos`, {
      withCredentials: true,
    });
    return {
      exito: true,
      pedidos: respuesta.data, // Se asume que el backend retorna un arreglo de pedidos
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Listar pedidos por estado
export const obtenerPedidosPorEstado = async (estado: any) => {
  try {
    const respuesta = await axios.get(`${API_URL}/pedidos/estado/${estado}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      pedidos: respuesta.data, // Se asume que el backend retorna un arreglo de pedidos filtrado por estado
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Obtener un pedido por ID
export const obtenerPedido = async (id: any) => {
  try {
    const respuesta = await axios.get(`${API_URL}/pedidos/${id}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      pedido: respuesta.data, // Se asume que el backend retorna el pedido solicitado
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Crear un pedido
export const crearPedido = async (datosPedido: any) => {
  /* 
    datosPedido debe incluir:
      - cod_cliente: string
      - id_ubicacion: number
      - id_ruta (opcional): number
      - estado (opcional): string
      - total: number
      - detalles_pedidos: array de objetos con:
          - cod_art: string
          - cantidad: number
          - precio_unitario: number
  */
  try {
    const respuesta = await axios.post(`${API_URL}/pedidos`, datosPedido, {
      withCredentials: true,
    });
    return {
      exito: true,
      pedido: respuesta.data, // Se asume que se retorna el pedido creado
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Actualizar un pedido
export const actualizarPedido = async (id: any, datosPedido: any) => {
  /* 
    datosPedido puede incluir:
      - estado: string
      - id_ruta: number
      - detalles_pedidos: array de objetos con:
          - cod_art: string
          - cantidad: number
          - precio_unitario: number
  */
  try {
    const respuesta = await axios.put(`${API_URL}/pedidos/${id}`, datosPedido, {
      withCredentials: true,
    });
    return {
      exito: true,
      pedido: respuesta.data, // Se asume que se retorna el pedido actualizado
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Eliminar un pedido
export const eliminarPedido = async (id: any) => {
  try {
    const respuesta = await axios.delete(`${API_URL}/pedidos/${id}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      mensaje: respuesta.data.mensaje || 'Pedido eliminado correctamente',
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};
