import { url } from "inspector";
import { apiSlice } from "../api/apiSlice";

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // UTILITY FOR EMPLOYEE PROFILE EDIT
    employeeEditUtils: builder.query({
      query: () => ({
        url: "employee_edit_utils",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    // UPDATE EMPLOYEE INFORMATION BY ADMIN
    updateEmployeeProfileByAdmin: builder.mutation({
      query: ({ id, data }) => ({
        url: `employee_edit_admin/${id}`,
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
        } catch (error: any) {
          console.error(error.data || error);
        }
      },
    }),

    // GET ALL CLASSROOM LIST BY ADMIN
    getClassroomList: builder.query({
      query: () => ({
        url: "get_classrooms",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useEmployeeEditUtilsQuery,
  useGetClassroomListQuery,
  useUpdateEmployeeProfileByAdminMutation,
} = adminApi;
