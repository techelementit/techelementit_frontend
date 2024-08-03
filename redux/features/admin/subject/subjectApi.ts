import { apiSlice } from "../../api/apiSlice";

export const subjectApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // GET ALL SUBJECT LIST BY ADMIN
    getSubjectList: builder.query({
      query: () => ({
        url: "get_subjects",
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["subject"],
    }),
    // ADD NEW SUBJECT
    addSubject: builder.mutation({
      query: (data) => ({
        url: "add_subject",
        method: "POST",
        body: { subjectName: data },
        credentials: "include" as const,
      }),
      invalidatesTags: ["subject"],
    }),
    // GET SINGLE SUBJECT BY ID
    getSingleSubject: builder.query({
      query: (id) => ({
        url: `get_single_subject/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["subject"],
    }),
    // EDIT SUBJECT
    editSubject: builder.mutation({
      query: ({ id, data }) => ({
        url: `edit_subject/${id}`,
        method: "PUT",
        body: { subjectName: data },
        credentials: "include" as const,
      }),
      invalidatesTags: ["subject"],
    }),
    // DELETE SUBJECT BY ID
    deleteSubject: builder.mutation({
      query: (id) => ({
        url: `delete_subject/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
      invalidatesTags: ["subject"],
    }),
  }),
});

export const {
  useGetSubjectListQuery,
  useAddSubjectMutation,
  useGetSingleSubjectQuery,
  useEditSubjectMutation,
  useDeleteSubjectMutation,
} = subjectApi;
