import { api } from '../utils/index';
import axios from 'axios';

export function login(values) {
  return axios.post(`${api}/login`, values);
}
