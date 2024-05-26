export type User = {
  name: string;
};

export type UserResponse = {
  success: boolean;
  status?: number;
  data: User;
  error?: string;
  statusText?: "OK";
};
