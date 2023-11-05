import axios, { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'sonner';
import i18next from 'i18next';

let api_url;
if (process.env.NEXT_PUBLIC_DEV_MODE) {
  api_url = process.env.NEXT_PUBLIC_API_URL_DEV;
} else {
  api_url = process.env.NEXT_PUBLIC_API_URL_PROD;
}

const api: AxiosInstance = axios.create({
  baseURL: api_url,
});

type HandleResponseError = (error: AxiosError) => void;

const handleError: HandleResponseError = (error) => {
  if (error.response || error.request) {
    toast.error(i18next.t("errors.api"));
  }

  return Promise.reject(error);
};

api.interceptors.response.use(
  response => response,
  error => handleError(error)
);

export default api;
