import axios, { AxiosResponse } from 'axios';

const api = axios.create({ baseURL: process.env.BASE_API_URL });
const flatten = (res: AxiosResponse) => res.data;

export const get = (url: string) => api.get(url).then(flatten);

export const post = <B = any>(url: string, body: B) =>
  api.post(url, body).then(flatten);