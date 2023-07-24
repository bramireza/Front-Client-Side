import { api, getConfigsWithAccessToken } from "../utils";
import { ApiResponse, UserResponse } from "../types";

const baseRequest = "/auth";

export const verifyLogin = async () => {
  const { data } = await api.get<UserResponse>(
    baseRequest,
    getConfigsWithAccessToken(),
  );
  return data;
};

export const logout = async () => {
  const { data } = await api.get<ApiResponse>(`${baseRequest}/logout`);
  return data;
};
