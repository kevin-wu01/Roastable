export type Token = {
  config: Record<string, unknown>;
  data: {
    token: string;
    message: string;
  };
  headers: Record<string, unknown>;
  request: Record<string, unknown>;
  status: number;
  statusText: string;
};

export type Response = {
  status: number;
  message: string | null;
};
