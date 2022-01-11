import axios from 'axios';
import {baseURL} from '../utils/routes';

export const getData = axios.create({
  baseURL: baseURL,
  method: 'GET',
  withCredentials: true,
  timeout: 5000,
});

export const postData = axios.create({
  baseURL: baseURL,
  method: 'POST',
  withCredentials: true,
  timeout: 5000,
});

export const putData = axios.create({
  baseURL: baseURL,
  method: 'PUT',
  withCredentials: true,
  timeout: 5000,
});
