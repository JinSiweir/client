/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from 'axios';

export interface RequestOptions {
  apiUrl?: string;
  isJoinPrefix?: boolean;
  urlPrefix?: string;
  joinParamsToUrl?: boolean;
  formatDate?: boolean;
  isTransformResponse?: boolean;
  isReturnNativeResponse?: boolean;
  ignoreRepeatRequest?: boolean;
  joinTime?: boolean;
  withToken?: boolean;
  retry?: {
    count: number;
    delay: number;
  };
}

export interface ErrorResult {
  code: -1;
  message: string;
  statusCode: number;
  date: string;
  path: string;
}

export interface Result<T = any> {
  code: number;
  data: T;
  message: string;
}

export interface PaginationOptions {
  pageSize: number;
  currentPage: number;
  orderBy?: string;
  order: Order;
}
export interface AxiosRequestConfigRetry extends AxiosRequestConfig {
  retryCount?: number;
}
