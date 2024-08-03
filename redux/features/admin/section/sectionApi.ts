import { apiSlice } from "../../api/apiSlice";

export const sectionApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // GET ALL SECTION LIST BY ADMIN
    getSectionList: builder.query({
      query: () => ({
        url: "get_sections",
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["section"],
    }),
    // ADD NEW SECTION
    addSection: builder.mutation({
      query: (data) => ({
        url: "add_section",
        method: "POST",
        body: { sectionName: data },
        credentials: "include" as const,
      }),
      invalidatesTags: ["section"],
    }),
    // GET SINGLE SECTION BY ID
    getSingleSection: builder.query({
      query: (id) => ({
        url: `get_single_section/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["section"],
    }),
    // EDIT SECTION
    editSection: builder.mutation({
      query: ({ id, data }) => ({
        url: `edit_section/${id}`,
        method: "PUT",
        body: { sectionName: data },
        credentials: "include" as const,
      }),
      invalidatesTags: ["section"],
    }),
    // DELETE SECTION BY ID
    deleteSection: builder.mutation({
      query: (id) => ({
        url: `delete_section/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
      invalidatesTags: ["section"],
    }),
  }),
});

export const {
  useGetSectionListQuery,
  useGetSingleSectionQuery,
  useAddSectionMutation,
  useDeleteSectionMutation,
  useEditSectionMutation,
} = sectionApi;
