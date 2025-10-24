import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://stocker-1-backend.onrender.com',
  withCredentials: true, // ✅ CRITICAL: Sends cookies with every request
  headers: {
    'Content-Type': 'application/json',
  }
});

export default API;