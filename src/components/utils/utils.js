import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nc-games-be.onrender.com/api'
})



export default api;