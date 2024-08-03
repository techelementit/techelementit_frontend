import { apiSlice } from "../../api/apiSlice";

export const employeeApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // GET ALL EMPLOYEE LIST BY ADMIN

    getEmployeeList: builder.query({
      query: () => ({
        url: "get_employees",
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["employee"],
    }),

    // GET SINGLE EMPLOYEE BY ID
    getSingleEmployee: builder.query({
      query: (id) => ({
        url: `get_single_employee/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["employee"],
    }),
    // EDIT EMPLOYEE BY ADMIN
    editEmployeeAdmin: builder.mutation({
      query: ({ id, data }) => ({
        url: `employee_edit_admin/${id}`,
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
      invalidatesTags: ["employee"],
    }),
    // DELETE EMPLOYEE BY ID
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `delete_employee/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
      invalidatesTags: ["employee"],
    }),
    getEmployeeEditUtility: builder.query({
      query: () => ({
        url: "employee_edit_utils",
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["utility"],
    }),
  }),
});

export const {
  useGetEmployeeEditUtilityQuery,
  useDeleteEmployeeMutation,
  useEditEmployeeAdminMutation,
  useGetEmployeeListQuery,
  useGetSingleEmployeeQuery,
} = employeeApi;
