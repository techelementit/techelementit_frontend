import { apiSlice } from "../../api/apiSlice";

export const classApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // GET ALL CLASSES LIST BY ADMIN
    getClassList: builder.query({
      query: () => ({
        url: "get_classes",
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["class"],
    }),

    // ADD NEW CLASS BY ADMIN
    addClass: builder.mutation({
      query: (className) => ({
        url: "add_class",
        method: "POST",
        body: { className },
        credentials: "include" as const,
      }),
      invalidatesTags: ["class"],
    }),
    // EDIT EXISTING CLASS BY ADMIN
    editClass: builder.mutation({
      query: ({ class_id, updateClass }) => ({
        url: `edit_class/${class_id}`,
        method: "PUT",
        body: { className: updateClass },
        credentials: "include" as const,
      }),
      invalidatesTags: ["class"],
    }),
    // GET SINGLE CLASS BY ID
    getSingleClass: builder.query({
      query: (id) => ({
        url: `get_single_class/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["class"],
    }),
    deleteClass: builder.mutation({
      query: (id) => ({
        url: `delete_class/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
      invalidatesTags: ["class"],
    }),
  }),
});

export const {
  useGetClassListQuery,
  useGetSingleClassQuery,
  useAddClassMutation,
  useEditClassMutation,
  useDeleteClassMutation,
} = classApi;
