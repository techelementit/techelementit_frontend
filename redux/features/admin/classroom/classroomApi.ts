import { apiSlice } from "../../api/apiSlice";

export const classroomApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // GET ALL CLASSROOM LIST BY ADMIN
    getClassroomList: builder.query({
      query: () => ({
        url: "get_classrooms",
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["classroom"],
    }),

    // ADD NEW CLASSROOM BY ADMIN
    addClassroom: builder.mutation({
      query: (classRoom) => ({
        url: "add_classroom",
        method: "POST",
        body: classRoom,
        credentials: "include" as const,
      }),
      invalidatesTags: ["classroom", "employee"],
    }),
    // EDIT EXISTING CLASSROOM BY ADMIN
    editClassroom: builder.mutation({
      query: ({ classroom_id, updateClassroom }) => ({
        url: `edit_classroom/${classroom_id}`,
        method: "PUT",
        body: { className: updateClassroom },
        credentials: "include" as const,
      }),
      invalidatesTags: ["classroom"],
    }),
    // GET SINGLE CLASSROOM BY ID
    getSingleClassroom: builder.query({
      query: (id) => ({
        url: `get_single_classroom/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["classroom"],
    }),
    // DELETE CLASSROOM
    deleteClassroom: builder.mutation({
      query: (id) => ({
        url: `delete_classroom/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
      invalidatesTags: ["classroom"],
    }),
    // ADD CLASSROOM UTILITY
    getClassroomUtility: builder.query({
      query: () => ({
        url: `classroom_add_edit_utils`,
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["utility"],
    }),
  }),
});

export const {
  useGetClassroomListQuery,
  useGetSingleClassroomQuery,
  useAddClassroomMutation,
  useEditClassroomMutation,
  useDeleteClassroomMutation,
  useGetClassroomUtilityQuery,
} = classroomApi;
