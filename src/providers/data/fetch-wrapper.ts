import { message } from "antd";

const customFetch = async (url: string, options: RequestInit = {}) => {
  const accessToken = localStorage.getItem('access_token');
  const headers = new Headers(options.headers);
  
  headers.set('Content-Type', 'application/json');
  if (accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`);
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    
    return response;
  } catch (error: any) {
    console.error("Fetch error:", error);
    message.error(`Error: ${error.message}`);
    throw error;
  }
};

export const fetchWrapper = customFetch;