import axios from 'axios';

// const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';
const BASE_API_URL = 'http://localhost:3001';
const REQUEST_TIMEOUT = 40000;

export const BASE_API_CONFIG = {
  baseURL: BASE_API_URL,
  requestTimeOut: REQUEST_TIMEOUT,
  headers: { 'Content-Type': 'application/json' }
};

export const axiosInstance = axios.create({
  baseURL: BASE_API_CONFIG.baseURL,
  timeout: BASE_API_CONFIG.requestTimeOut,
  headers: BASE_API_CONFIG.headers,
});