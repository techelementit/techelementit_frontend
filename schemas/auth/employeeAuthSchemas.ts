import * as Yup from "yup";
import {
  addressInfoSchema,
  englishOnly,
  password,
  phoneEng,
} from "../common/commonSchemas";

// EMPLOYEE REGISTER SCHEMA
//----------------------------
export const employeeRegisterSchema = Yup.object().shape({
  name: Yup.object({
    firstName: englishOnly
      .trim()
      .required("First name is required")
      .max(50, "First name limit 50 characters"),
    sureName: englishOnly.trim().max(50, "Sure name limit 50 characters"),
  }),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: phoneEng.required("Phone number is required"),
  password: password.required("Password is required"),
  personalInfo: Yup.object({
    bloodGroup: Yup.string().trim().max(20, "Blood group limit 20 characters"),
    sex: Yup.string()
      .trim()
      .required("Sex is required")
      .max(20, "Sex limit 20 characters"),
    dateOfBirth: Yup.date()
      .nullable()
      .required("Date of birth is required")
      .max(new Date(), "Date of birth must be in the past"),
    religion: Yup.string()
      .trim()
      .required("Religion is required")
      .max(50, "Religion limit 50 characters"),
    BCN: Yup.string()
      .matches(/^[0-9]+$/, "Invalid birthday certificate number")
      .max(30, "Birthday certificate limit 30 characters"),
    NID: Yup.string()
      .matches(/^[0-9]+$/, "Invalid national id card number")
      .max(20, "National id card limit 20 characters"),
    address: addressInfoSchema,
  }),
  avatar: Yup.string().required("Avatar is required"),
  educations: Yup.array(
    Yup.object({
      examName: englishOnly
        .trim()
        .required("Exam name is required")
        .max(100, "Exam name limit 100 characters"),
      examYear: Yup.string()
        .matches(/^[0-9]+$/, "Invalid exam year")
        .min(4, "Exam year limit minimum 4 characters")
        .max(4, "Exam year limit maximum 4 characters")
        .required("Exam year is required"),
      examBoard: englishOnly
        .trim()
        .required("Exam board is required")
        .max(100, "Exam board limit 100 characters"),
      examResult: Yup.string()
        .matches(/^\d+(\.\d{1,2})?$/, "Invalid exam result")
        .min(4, "Exam result limit minimum 4 characters")
        .max(4, "Exam result limit maximum 4 characters")
        .required("Exam result is required"),
    })
  ),
});

// EMPLOYEE LOGIN SCHEMA
//----------------------------

export const employeeLoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required."),
  password: password.required("Password is required."),
  employmentRef: englishOnly.required("Employment reference code is required."),
});

// EMPLOYEE EDIT SCHEMA BY ADMIN
//---------------------------------

interface SectionSubjectCondition {
  sectionId: string;
  subjectId: string;
}

export const employeeEditSchemaByAdmin = Yup.object().shape({
  name: Yup.object({
    firstName: englishOnly
      .trim()
      .required("First name is required")
      .max(50, "First name limit 50 characters"),
    sureName: englishOnly.trim().max(50, "Sure name limit 50 characters"),
  }),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: phoneEng.required("Phone number is required"),
  password: password,
  personalInfo: Yup.object({
    bloodGroup: Yup.string().trim().max(20, "Blood group limit 20 characters"),
    sex: Yup.string()
      .trim()
      .required("Sex is required")
      .max(20, "Sex limit 20 characters"),
    dateOfBirth: Yup.date()
      .nullable()
      .required("Date of birth is required")
      .max(new Date(), "Date of birth must be in the past"),
    religion: Yup.string()
      .trim()
      .required("Religion is required")
      .max(50, "Religion limit 50 characters"),
    BCN: Yup.string()
      .matches(/^[0-9]+$/, "Invalid birthday certificate number")
      .max(30, "Birthday certificate limit 30 characters"),
    NID: Yup.string()
      .matches(/^[0-9]+$/, "Invalid national id card number")
      .max(20, "National id card limit 20 characters"),
    address: addressInfoSchema,
  }),
  avatar: Yup.string().required("Avatar is required"),
  educations: Yup.array(
    Yup.object({
      examName: englishOnly
        .trim()
        .required("Exam name is required")
        .max(100, "Exam name limit 100 characters"),
      examYear: Yup.string()
        .matches(/^[0-9]+$/, "Invalid exam year")
        .min(4, "Exam year limit minimum 4 characters")
        .max(4, "Exam year limit maximum 4 characters")
        .required("Exam year is required"),
      examBoard: englishOnly
        .trim()
        .required("Exam board is required")
        .max(100, "Exam board limit 100 characters"),
      examResult: Yup.string()
        .matches(/^\d+(\.\d{1,2})?$/, "Invalid exam result")
        .min(4, "Exam result limit minimum 4 characters")
        .max(4, "Exam result limit maximum 4 characters")
        .required("Exam result is required"),
    })
  ),
  employmentRef: englishOnly
    .trim()
    .max(15, "Employment reference code limit 15 characters"),
  role: englishOnly.trim().max(10, "Employee role limit 10 characters"),
  isVerified: Yup.boolean(),
  classTeacher: Yup.object({
    classId: Yup.string(),
    sectionId: Yup.string(),
  }),
  classList: Yup.array(
    Yup.object({
      classId: Yup.string(),
      sectionId: Yup.string(),
      subjectId: Yup.string(),
    })
  ),
});

const testDataForEditByAdmin = {
  name: {
    firstName: "",
    sureName: "",
  },
  email: "",
  phone: "",
  password: "",
  personalInfo: {
    sex: "",
    bloodGroup: "",
    BCN: "",
    NID: "",
    religion: "",
    dateOfBirth: "",
    address: {
      nationality: "",
      town: "",
      postOffice: "",
      district: "",
      division: "",
      upazila: "",
    },
  },
  avatar: "",
  employmentRef: "",
  role: "",
  isVerified: false,
  classTeacher: {
    classId: "",
    sectionId: "",
  },
  educations: [
    {
      examName: "",
      examYear: "",
      examBoard: "",
      examResult: "",
    },
  ],
  classList: [{ subjectId: "", classId: "", sectionId: "" }],
};

// const testDataForRegister = {
//   name: {
//     firstName: "",
//     sureName: "",
//   },
//   email: "",
//   phone: "",
//   password: "",
//   personalInfo: {
//     sex: "",
//     bloodGroup: "",
//     BCN: "",
//     NID: "",
//     religion: "",
//     dateOfBirth: "",
//     address: {
//       nationality: "",
//       town: "",
//       postOffice: "",
//       district: "",
//       policeStation: "",
//       division: "",
//     },
//   },
//   avatar: "",

//   educations: [
//     {
//       examName: "",
//       examYear: "",
//       examBoard: "",
//       examResult: "",
//     },
//   ],
// };
