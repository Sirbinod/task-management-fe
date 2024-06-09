import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IApiInfo } from '../interfaces/general';
import Cookies from 'js-cookie';

export const baseUrl = `${process.env.REACT_APP_API_KEY}/api`;
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export function apiRequest(apiInfo: IApiInfo, reqData: any, reqConfig?: Object, formData?: boolean) {
  const headers = getHeaders(formData || false);
  let axiosReqParams: AxiosRequestConfig = {
    url: apiInfo.url,
    method: apiInfo.method,
    baseURL: baseUrl,
    headers: headers,
    data: reqData,
    timeout: 60 * 3 * 1000,
    cancelToken: source.token,
  };
  if (reqConfig) axiosReqParams = { ...axiosReqParams, ...reqConfig };
  return axios
    .request(axiosReqParams)
    .then((res: AxiosResponse<any>) => {
      return res;
    })
    .catch((err: AxiosError<any>) => {
      const errorResp = errorResponse(err);
      return errorResp;
    });
}

function getHeaders(formData: boolean) {
  const authDataString = Cookies.get('authentication');
  const authData = authDataString ? JSON.parse(authDataString) : null;
  const access_token = authData?.token;
  return {
    'Content-Type': formData ? 'multipart/form-data' : 'application/json',
    Authorization: `Bearer ${access_token}`,
  };
}

function errorResponse(err: AxiosError) {
  let errorResp: any = {
    message: 'Error',
    data: null,
    status: false,
  };
  if (err.response) {
    if (
      (err?.response?.data as any)?.code === 'invalidToken' ||
      (err?.response?.data as any)?.code === 'tokenExpired'
    ) {
      // window.location.href = '/login';
      return;
    }
    errorResp.message = err.response.status.toString();
    errorResp.data = err.response.data;
  } else errorResp.message = err.message;

  errorResp.config = err.config;
  return errorResp;
}
