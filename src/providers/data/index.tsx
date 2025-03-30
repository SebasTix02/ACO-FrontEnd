import { DataProvider } from "@refinedev/core";
import { fetchWrapper } from "./fetch-wrapper";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const API_URL = `${API_BASE_URL}/api`;

export const dataProvider: DataProvider = {
  getList: async ({ resource, pagination, sorters, filters, meta }) => {
    const response = await fetchWrapper(`${API_URL}/${resource}`, { method: "GET" });
    const data = await response.json();
    return { data, total: data.length };
  },
  
  getOne: async ({ resource, id, meta }) => {
    const response = await fetchWrapper(`${API_URL}/${resource}/${id}`, { method: "GET" });
    const data = await response.json();
    return { data };
  },

  create: async ({ resource, variables }) => {
    const response = await fetchWrapper(`${API_URL}/${resource}`, {
      method: "POST",
      body: JSON.stringify(variables)
    });
    const data = await response.json();
    return { data };
  },

  update: async ({ resource, id, variables }) => {
    const response = await fetchWrapper(`${API_URL}/${resource}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(variables)
    });
    const data = await response.json();
    return { data };
  },

  deleteOne: async ({ resource, id, variables }) => {
    const response = await fetchWrapper(`${API_URL}/${resource}/${id}`, {
      method: "DELETE"
    });
    const data = await response.json();
    return { data };
  },

  getApiUrl: () => API_URL,

};