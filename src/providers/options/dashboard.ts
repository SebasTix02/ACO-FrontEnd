import { API_URL } from "../data";
import axios from 'axios';

const API_DASHBOARD = `${API_URL}/dashboard`

// KPIs Principales
export const getKPIsMensuales = async (año: number, mes: number, ciudad?: string) => {
  try {
    const respuesta = await axios.post(`${API_URL}/dashboard/kpis`, {
      año,
      mes,
      codCiudad: ciudad
    }, { withCredentials: true });
    
    return {
      exito: true,
      data: respuesta.data.data
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error obteniendo KPIs'
    };
  }
};

// Distribución por zonas
export const getDistribucionVentas = async (año: number, producto?: string) => {
  try {
    const respuesta = await axios.post(`${API_URL}/dashboard/distribucionVentas`, {
      año,
      cod_art: producto
    }, { withCredentials: true });
    
    return {
      exito: true,
      data: respuesta.data.data
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error obteniendo distribución'
    };
  }
};

// Patrones de consumo
export const getPatronesConsumo = async (filtros: {
  periodo: string;
  fechaInicio: string;
  fechaFin: string;
  producto?: string;
}) => {
  try {
    const respuesta = await axios.post(`${API_URL}/dashboard/patronesConsumo`, filtros, {
      withCredentials: true
    });
    
    return {
      exito: true,
      data: respuesta.data.data
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error obteniendo patrones'
    };
  }
};

// Picos de demanda
export const getPicosDemanda = async (año: number, ciudad: string) => {
  try {
    const respuesta = await axios.post(`${API_URL}/dashboard/picosDemanda`, {
      anio: año,
      codCiudad: ciudad
    }, { withCredentials: true });
    
    return {
      exito: true,
      data: respuesta.data
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Error obteniendo picos'
    };
  }
};
export const getEstadisticasGenerales = async () => {
  try {
    const respuesta = await axios.get(`${API_DASHBOARD}`, { withCredentials: true });
    return {
      exito: true,
      data: respuesta.data,
    };
  } catch (error: any) {
    return {
      exito: false,
      error: error.response?.data?.error || 'Sin respuesta desde el servidor Back-end.',
    };
  }
};
