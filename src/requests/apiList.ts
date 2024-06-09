import { TRequestMethods } from '../interfaces/general';

export const API_METHODS: { [key: string]: TRequestMethods } = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  patch: 'PATCH',
  delete: 'DELETE',
};

export const API_LIST: { [key: string]: any } = {
  task: 'tasks',
  auth: 'auth',
};
