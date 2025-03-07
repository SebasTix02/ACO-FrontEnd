import axios from 'axios';

// Configuración esencial para trabajar con cookies
axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.withCredentials = true;


export default axios;