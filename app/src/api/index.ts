import axios from 'axios';

let api_url;
if (process.env.NEXT_PUBLIC_DEV_MODE) {
  api_url = process.env.NEXT_PUBLIC_API_URL_DEV;
} else {
  api_url = process.env.NEXT_PUBLIC_API_URL_PROD;
}

const api = axios.create({
  baseURL: api_url,
});

export default api;
