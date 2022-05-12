import axios, { AxiosResponse } from "axios";
import AuthService from "./auth";

const Auth = new AuthService();

const http = axios.create({
  baseURL: "http://localhost:1337/api",
  timeout: 10000,
});

http.interceptors.request.use(async (config: any) => {
  const token = await Auth.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

http.interceptors.response.use(response => {
  return response;
},
(error: any) => {
  if (error?.response) {
    if (error?.response?.status === 400 || error?.response?.status === 401) {
      Auth.logout();
    }

    if (error?.response?.status === 500) {
      // Toast.show({
      //   type: "error",
      //   text1: 'Algo ha ocurrido en el servidor',
      //   text2: 'Comunicate con el administrador del sistema para más información',
      // })
    }
  }
  return Promise.reject(error);
})

const jsonHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Accept": "application/json"
};

const formDataHeaders = {
  "Content-Type": "multipart/form-data",
  "Access-Control-Allow-Origin": "*",
  "Accept": "application/json"
};

export default class HttpService {
  private useFormData: boolean;

  constructor({ useFormData }: { useFormData: boolean } = { useFormData: false }) {
    this.useFormData = useFormData;
  }

  public async get(url: string, params?: any): Promise<AxiosResponse> {
    const headers = this.useFormData ? formDataHeaders : jsonHeaders;
    return http.get(url, { params, headers });
  }

  public async post(url: string, data?: any): Promise<AxiosResponse> {
    const headers = this.useFormData ? formDataHeaders : jsonHeaders;
    return http.post(url, data, { headers });
  }

  public async put(url: string, data?: any): Promise<AxiosResponse> {
    const headers = this.useFormData ? formDataHeaders : jsonHeaders;
    return http.put(url, data, { headers });
  }

  public async delete(url: string): Promise<AxiosResponse> {
    const headers = this.useFormData ? formDataHeaders : jsonHeaders;
    return http.delete(url, { headers });
  }
}