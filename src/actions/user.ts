"use server";

import http from "@/services/http";
import { UserResponse } from "@/Models/User";

export const getUser = async (id: number) => {
  try {
    const response: UserResponse = await http.get(`/users/${id}`);

    if (response.status === 200) {
      return {
        success: true,
        status: response?.status,
        data: response?.data,
      };
    }

    if (response.statusText !== "OK") {
      return { success: false, error: response?.data };
    }
  } catch (ex) {
    return { success: false, error: "Something went wrong" };
  }
};
