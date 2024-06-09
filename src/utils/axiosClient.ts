import axios from 'axios';
import { getApiEndpoint } from './helpers';

export const axiosClient = axios.create({
  baseURL: getApiEndpoint(),
});
