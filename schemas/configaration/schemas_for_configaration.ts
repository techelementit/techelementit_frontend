import * as Yup from "yup";
import {
  banglaOnly,
  englishNumPositiveOnly,
  englishOnly,
} from "../common/commonSchemas";

// ADD CLASS OR EDIT CLASS SCHEMA
export const addOrEditClassSchema = Yup.object().shape({
  className: Yup.object({
    en: englishOnly
      .trim()
      .required("Class name (English) is required")
      .max(100, "Class name limit 100 characters"),
    bn: banglaOnly
      .trim()
      .required("Class name (Bangla) is required")
      .max(100, "Class name limit 100 characters"),
  }),
});

// ADD SUBJECT OR EDIT SUBJECT SCHEMA

export const addOrEditSubjectSchema = Yup.object().shape({
  subjectName: Yup.object({
    en: englishOnly
      .trim()
      .required("Subject name (English) is required")
      .max(100, "Subject name limit 100 characters"),
    bn: banglaOnly
      .trim()
      .required("Subject name (Bangla) is required")
      .max(100, "Subject name limit 100 characters"),
  }),
});

// ADD SECTION OR EDIT SECTION SCHEMA

export const addOrEditSectionSchema = Yup.object().shape({
  sectionName: Yup.object({
    en: englishOnly
      .trim()
      .required("Section name (English) is required")
      .max(100, "Section name limit 100 characters"),
    bn: banglaOnly
      .trim()
      .required("Section name (Bangla) is required")
      .max(100, "Section name limit 100 characters"),
  }),
});

// ADD EXAMINATION OR EDIT EXAMINATION SCHEMA

export const addOrEditExaminationSchema = Yup.object().shape({
  examinationName: Yup.object({
    en: englishOnly
      .trim()
      .required("Examination name (English) is required")
      .max(100, "Examination name limit 100 characters"),
    bn: banglaOnly
      .trim()
      .required("Examination name (Bangla) is required")
      .max(100, "Examination name limit 100 characters"),
  }),
});

// ADD CLASS OR EDIT CLASS SCHEMA
export const addOrEditClassroomSchema = Yup.object().shape({
  classId: Yup.string().required("Class is required"),
  sectionId: Yup.string().required("Section is required"),
  subjectsTeachersList: Yup.array(
    Yup.object({
      teacherId: Yup.string().required("Teacher is required"),
      subjectId: Yup.string().required("Subject is required"),
      subjectFullMark: englishNumPositiveOnly
        .required("Subject full mark is required")
        .max(100, "Full mark limits is 100"),
      subjectPassMark: englishNumPositiveOnly
        .required("Subject pass mark is required")
        .max(100, "Full mark limits is 100"),
    })
  ),
});
