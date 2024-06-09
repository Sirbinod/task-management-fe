export type TRequestMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type SortingType = 'title_asc' | 'title_desc';

export interface Response<T> {
  code: string;
  data: T;
  status: boolean;
  message: string;
  total?: number;
}

export interface IApiMethods {
  get: 'GET';
  post: 'POST';
  put: 'PUT';
  patch: 'PATCH';
  delete: 'DELETE';
}

export interface IApiInfo {
  url: string;
  method: TRequestMethods;
}

export interface IInitialState {
  status: 0 | 1 | 100 | null;
  data: any;
  message: string | null;
  loading: boolean;
  error: string | undefined;
}

export interface Option {
  label: string;
  value: string;
}

export interface DataItem {
  _id: string;
  [key: string]: any;
}
