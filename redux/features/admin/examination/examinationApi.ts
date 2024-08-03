import { apiSlice } from "../../api/apiSlice";

export const examinationApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // GET ALL EXAMINATION LIST BY ADMIN
    getExaminationList: builder.query({
      query: () => ({
        url: "get_examinations",
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["examination"],
    }),
    // ADD NEW EXAMINATION
    addExamination: builder.mutation({
      query: (data) => ({
        url: "add_examination",
        method: "POST",
        body: { examinationName: data },
        credentials: "include" as const,
      }),
      invalidatesTags: ["examination"],
    }),
    // GET SINGLE EXAMINATION BY ID
    getSingleExamination: builder.query({
      query: (id) => ({
        url: `get_single_examination/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["examination"],
    }),
    // EDIT EXAMINATION
    editExamination: builder.mutation({
      query: ({ id, data }) => ({
        url: `edit_examination/${id}`,
        method: "PUT",
        body: { examinationName: data },
        credentials: "include" as const,
      }),
      invalidatesTags: ["examination"],
    }),
    // DELETE EXAMINATION BY ID
    deleteExamination: builder.mutation({
      query: (id) => ({
        url: `delete_examination/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
      invalidatesTags: ["examination"],
    }),
  }),
});

export const {
  useAddExaminationMutation,
  useDeleteExaminationMutation,
  useEditExaminationMutation,
  useGetExaminationListQuery,
  useGetSingleExaminationQuery,
} = examinationApi;
