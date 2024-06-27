"use server";

import { API } from "@/config/constants";
import { axiosInstance } from "@/interceptors/axios.interceptor";

const API_URL = API;

export const getApi = async (url: string, headers?: any) => {
  const apiUrl = `${API_URL}/${url}`;
  return await axiosInstance.get(apiUrl, {
    withCredentials: true,
    headers,
  });
};

export const postApi = async (url: string, data: any) => {
  const apiUrl = `${API_URL}/${url}`;
  console.log(apiUrl);
  const payload = data;
  return await axiosInstance.post(apiUrl, payload, {
    withCredentials: true,
  });
};

export const patchApi = async (url: string, data: any) => {
  const apiUrl = `${API_URL}/${url}`;
  const payload = data;
  return axiosInstance.patch(apiUrl, payload, {
    withCredentials: true,
  });
};

export const deleteApi = async (url: string) => {
  const apiUrl = `${API_URL}/${url}`;
  return axiosInstance
    .delete(apiUrl, {
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
