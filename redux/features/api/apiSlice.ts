import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoggedIn } from "../auth/authSlice";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  }),
  tagTypes: [
    "employee",
    "class",
    "section",
    "subject",
    "examination",
    "classroom",
    "user",
    "utility",
  ],
  endpoints: (builder) => ({
    refreshToken: builder.query({
      query: () => ({
        url: "refresh_token",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    loadAuthData: builder.query({
      query: () => ({
        url: "me",
        method: "GET",
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            LoggedIn({
              token: result?.data?.token,
              authData: result?.data?.authData,
            })
          );
        } catch (error: any) {
          console.error(error?.error);
        }
      },
    }),
  }),
});

export const { useRefreshTokenQuery, useLoadAuthDataQuery } = apiSlice;
