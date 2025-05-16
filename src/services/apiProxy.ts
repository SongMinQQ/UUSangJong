import { QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { AxiosRequestConfig, Method } from "axios";
import axios from "axios";

const BASE_URL = "https://minq.online/";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  withCredentials: true,
});

interface InteralContext {
  context: string;
  params: URLSearchParams;
}

interface ProxyRequestOptions {
  path: string[];
  data?: object;
}

interface SelectorProps {
  queryKey?: Partial<QueryFunctionContext>;
  options?: ProxyRequestOptions;
  method: Method;
}

async function proxyRequest<T>(
  options: ProxyRequestOptions | Partial<QueryFunctionContext>,
  method: Method
): Promise<T> {
  const isGet = method === "GET";
  const config = isGet
    ? buildConfig((options as QueryFunctionContext).queryKey, method)
    : buildConfig(
        (options as ProxyRequestOptions).path,
        method,
        (options as ProxyRequestOptions).data
      );
  const { data } = await api(config);
  return data;
}

export async function proxyRequestSelector<T = object>({
  queryKey,
  options,
  method,
}: SelectorProps): Promise<T> {
  if (method === "GET" && queryKey) return proxyRequest(queryKey, method);
  if (options) return proxyRequest(options, method);
  return {} as T;
}

export const proxyGetRequest = async (queryKey: QueryFunctionContext): Promise<object> => {
  return await api(buildConfig(queryKey.queryKey, "GET")).then((res) => res.data);
};

function buildConfig(
  queryKey: QueryKey | string[],
  method: Method,
  data?: object
): AxiosRequestConfig {
  const config: AxiosRequestConfig = { method };
  if (data) config.data = data;
  const { context, params } = Array.isArray(queryKey)
    ? makeContextByPath(queryKey)
    : makeContextByQueryKey(queryKey);
  config.baseURL = BASE_URL;
  config.url = context + (params.toString() ? `${params.toString()}` : "");
  return config;
}

function makeContextByQueryKey(queryKey: QueryKey): InteralContext {
  const path: string[] = [];
  let params: Record<string, unknown> = {};
  if (Array.isArray(queryKey)) {
    queryKey.forEach((key) => {
      if (typeof key === "string") path.push(key);
      else if (typeof key === "object" && key !== null) params = { ...params, ...key };
    });
  } else if (typeof queryKey === "string") path.push(queryKey);

  return {
    context: `/${path.join("/")}`,
    params: toSearchParams(params),
  };
}

function makeContextByPath(path: string[]): InteralContext {
  return {
    context: `/${path.join("/")}`,
    params: new URLSearchParams(),
  };
}

function toSearchParams(obj: Record<string, unknown>): URLSearchParams {
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([key, value]) => {
    if (Array.isArray(value)) value.forEach((v) => v && params.append(key, String(v)));
    else if (value != null) params.append(key, String(value));
  });
  return params;
}
