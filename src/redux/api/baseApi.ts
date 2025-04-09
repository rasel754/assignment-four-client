/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { TOrder, TProduct, TResponse } from "../../types";
import { logout, setUser, TUser } from "../features/auth/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://assignment-four-server-navy.vercel.app/api/a4",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).login;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions): Promise<any> => {
  let result = (await baseQuery(args, api, extraOptions)) as TResponse<
    TProduct | TOrder
  >;
  if (result?.error?.status === 404) {
    toast.error(result?.error?.data?.message, {
      position: "top-center",
      style: {
        color: "red",
        padding: "10px",
        borderRadius: "8px",
      },
      duration: 2000,
    });
  }
  if (result?.error && result?.error?.status === 401) {
    const res = await fetch(
      "https://assignment-four-server-navy.vercel.app/api/a4/auth/refreshToken",
      {
        method: "POST",
        credentials: "include",
      }
    );
    const refreshResults = await res.json();
    if (refreshResults?.data?.token) {
      const currentUser = (api.getState() as RootState).login.user;
      api.dispatch(
        setUser({
          user: currentUser as TUser,
          token: refreshResults?.data?.token,
        })
      );
      result = (await baseQuery(
        args,
        api,
        extraOptions
      )) as TResponse<TProduct>;
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
