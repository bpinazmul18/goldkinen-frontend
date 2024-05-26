export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsResponse = {
  success: boolean;
  status?: number;
  data: Post[];
  error?: string;
  statusText?: "OK";
};
