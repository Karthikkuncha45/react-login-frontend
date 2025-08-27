import axios from "axios";

const API = axios.create({
  baseURL: "https://samplereactproject.onrender.com/api", // backend base URL
});

// Interceptor (optional for auth tokens in future)
API.interceptors.request.use((req) => {
  return req;
});

export default API;
