import axios from 'axios';
import { API_URL } from '../data';

// Obtener la lista de usuarios
export const listarUsuarios = async () => {
  try {
    const respuesta = await axios.get(`${API_URL}/usuarios`, {
      withCredentials: true,
    });
    return {
      exito: true,
      usuarios: respuesta.data, // Se asume que el backend retorna un arreglo de usuarios
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Obtener un usuario por ID
export const obtenerUsuario = async (id: string) => {
  try {
    const respuesta = await axios.get(`${API_URL}/usuarios/${id}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      usuario: respuesta.data, // Se asume que el backend retorna el usuario
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Crear un usuario
export const crearUsuario = async (datosUsuario: {
  usuario: string;
  clave: string;
  nombre: string;
  apellido: string;
  privilegios: string;
}) => {
  try {
    const respuesta = await axios.post(`${API_URL}/usuarios`, datosUsuario, {
      withCredentials: true,
    });
    return {
      exito: true,
      usuario: respuesta.data, // Se asume que se retorna el usuario creado
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Actualizar un usuario
export const actualizarUsuario = async (
  id: string,
  datosUsuario: Partial<{
    usuario: string;
    clave: string;
    nombre: string;
    apellido: string;
    privilegios: string;
  }>
) => {
  try {
    const respuesta = await axios.put(`${API_URL}/usuarios/${id}`, datosUsuario, {
      withCredentials: true,
    });
    return {
      exito: true,
      usuario: respuesta.data, // Se asume que se retorna el usuario actualizado
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};

// Eliminar un usuario
export const eliminarUsuario = async (id: string) => {
  try {
    const respuesta = await axios.delete(`${API_URL}/usuarios/${id}`, {
      withCredentials: true,
    });
    return {
      exito: true,
      mensaje: respuesta.data.mensaje || 'Usuario eliminado correctamente',
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error de conexión con el servidor',
    };
  }
};
