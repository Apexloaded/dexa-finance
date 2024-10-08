export interface IActionResponse {
  status: boolean;
  message?: string;
  data?: any;
}

export interface ErrorResponse {
  errors: string;
}

export type AsyncFunction = (...args: any[]) => Promise<any>;
