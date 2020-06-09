import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

// Iniciar API -> yarn json-server server.json -p 3333
