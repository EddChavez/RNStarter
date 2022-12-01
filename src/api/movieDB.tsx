import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '040d6e2a5ef3a2251cc2e044149065cf',
    language: 'es-ES',
    session_id: '8d0295015eea18a202372e3225bb4c549fb6597b',
  },
});

export default API;
