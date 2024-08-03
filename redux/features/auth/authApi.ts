import { apiSlice } from "../api/apiSlice";
import { LoggedOut, employeeLoggedIn, employeeRegistration } from "./authSlice";

interface IRegistrationResponse {
  success: boolean;
  message: string;
  activationToken: string;
}

interface IRegistrationData {
  name: string;
  email: string;
  password: string;
}

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    employeeRegister: builder.mutation<
      IRegistrationResponse,
      IRegistrationData
    >({
      query: (data) => ({
        url: "employee_registration",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            employeeRegistration({
              token: result.data.activationToken,
            })
          );
        } catch (error: any) {
          console.error(error?.data || error);
        }
      },
    }),
    employeeActivation: builder.mutation({
      query: ({ activation_token, activation_code, data }) => ({
        url: "employee_activate",
        method: "POST",
        body: {
          activation_token,
          activation_code,
          data,
        },
      }),
    }),
    employeeLogin: builder.mutation({
      query: ({ email, password, employmentRef }) => ({
        url: "employee_login",
        method: "POST",
        body: {
          email,
          password,
          employmentRef,
        },
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            employeeLoggedIn({
              token: result.data.accessToken,
              authData: result.data.authData,
            })
          );
        } catch (error: any) {
          console.error(error?.data || error);
        }
      },
    }),
    logoutEveryone: builder.mutation({
      query: () => ({
        url: "logout",
        method: "GET",
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          dispatch(LoggedOut());
        } catch (error: any) {
          console.error(error?.data || error);
        }
      },
    }),
  }),
});

export const {
  useEmployeeRegisterMutation,
  useEmployeeActivationMutation,
  useEmployeeLoginMutation,
  useLogoutEveryoneMutation,
} = authApi;
