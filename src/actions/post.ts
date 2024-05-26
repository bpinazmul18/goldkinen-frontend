"use server";

import http from "@/services/http";
import { PostsResponse } from "@/Models/Post";

export const getPosts = async () => {
  try {
    const response: PostsResponse = await http.get(`/posts`);

    if (response.status === 200) {
      return {
        success: true,
        status: response?.status,
        data: response?.data.sort((a, b) => b.id - a.id),
      };
    }

    if (response.statusText !== "OK") {
      return { success: false, error: response?.data };
    }
  } catch (ex) {
    return { success: false, error: "Something went wrong" };
  }
};
