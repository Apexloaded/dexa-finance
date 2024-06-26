import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import { decrypt } from "@/libs/encryption";
import { cookies } from "next/headers";
import { Sessions } from "@/libs/enums";
import { API } from "@/config/constants";

export const APIHOST = API;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: APIHOST,
  headers: {
    "Content-Type": "application/json",
    "api-key": "This is api key",
  },
});

interface RetryConfig extends AxiosRequestConfig {
  retry: number;
  retryDelay: number;
}

const globalConfig: RetryConfig = {
  retry: 3,
  retryDelay: 1000,
};

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = cookies().get(Sessions.ACCESS_TOKEN)?.value;
  const parsedToken = token ? token : "";

  if (config.headers.Authorization) return config;

  if (parsedToken) {
    config.headers["Authorization"] = `Bearer ${parsedToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;

    // if (
    //   response &&
    //   (response.status == 401 || response.data.error == "Unauthorized") &&
    //   !isTokenRequested
    // ) {
    //   const w = window as any;
    //   if (w.location.pathname == appRoutes.auth.login.path) return;

    //   try {
    //     isTokenRequested = true;
    //     const res = await refreshToken();
    //     if (res.statusCode == 200) {
    //       w.location.reload();
    //     }
    //   } catch (err) {
    //     isTokenRequested = false;
    //     w.location.href = "/login";
    //   }
    // }

    if (!config || !config.retry) {
      return Promise.reject(error);
    }

    config.retry -= 1;
    const delayRetryReq = new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, config.retryDelay || 1000);
    });
    return delayRetryReq.then(() => axiosInstance(config));
  }
);

export { axiosInstance, globalConfig };
