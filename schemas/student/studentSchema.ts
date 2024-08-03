import * as Yup from "yup";
import {
  addressInfoSchema,
  banglaOnly,
  englishNumPositiveOnly,
  englishOnly,
  phoneEng,
} from "../common/commonSchemas";

// STUDENT ALL INFORMATION SCHEMA
//-------------------------------
const nameSchema = Yup.object().shape({
  firstName: Yup.object({
    en: englishOnly
      .trim()
      .required("First name (English) is required")
      .max(50, "First name (English) limit 50 characters."),
    bn: banglaOnly
      .required("First name (Bangla) is required")
      .max(50, "First name (Bangla) limit 50 characters."),
  }),
  sureName: Yup.object({
    en: englishOnly.trim().max(50, "Sure name (English) limit 50 characters."),
    bn: banglaOnly.trim().max(50, "Sure name (Bangla) limit 50 characters."),
  }),
});

// PARENT NAME SCHEMA

const parentNameSchema = Yup.object().shape({
  en: englishOnly
    .trim()
    .required("Parent name is required")
    .max(50, "Parent name limit 50 characters."),
  bn: banglaOnly
    .trim()
    .required("Parent name is required")
    .max(50, "Parent name limit 50 characters."),
});

// PARENT INFORMATION SCHEMA
const parentInfoSchema = Yup.object().shape({
  name: parentNameSchema,
  phone: phoneEng.required("Phone number is required"),
  email: Yup.string().email("Invalid email address"),
});

// STUDENT SCHEMA
const studentInfoSchema = Yup.object().shape({
  name: nameSchema,
  sex: Yup.string()
    .trim()
    .required("Sex is required")
    .max(20, "Sex limit 20 characters."),
  bloodGroup: Yup.string().max(20, "Blood group limit 10 characters."),
  dateOfBirth: Yup.date()
    .nullable()
    .required("Date of birth is required")
    .max(new Date(), "Date of birth must be in the past"),
  religion: Yup.string()
    .required("Religion is required")
    .max(50, "Religion limit 50 characters."),
  BCN: Yup.string()
    .matches(/^[0-9]+$/, "Invalid admission test roll")
    .max(30, "Birthday certificate limit 30 characters."),
  admitClass: Yup.string()
    .trim()
    .required("Admit class is required")
    .max(20, "Admit class limit 20 characters."),
  avatar: Yup.string().required("Avatar is required"),
  admissionTestRoll: englishNumPositiveOnly.max(
    100,
    "Admission test roll limit 100."
  ),
});

const parentsInfoSchema = Yup.object({
  fathersInfo: parentInfoSchema,
  mothersInfo: parentInfoSchema,
});

const addressSchema = Yup.object({
  present: addressInfoSchema,
  permanent: addressInfoSchema,
});

const othersInfoSchema = Yup.object().shape({
  previousSchool: englishOnly
    .trim()
    .max(50, "Previous school limit 50 characters."),
  guardian: englishOnly
    .trim()
    .required("Guardian is required")
    .max(50, "Guardian limit 50 characters."),
  guardianContactNumber: phoneEng.required(
    "Guardian contact number is required"
  ),
  guardianEmail: Yup.string().email("Invalid email address"),
  termCondition: Yup.boolean(),
});
// STUDENT ADMISSION SCHEMA
//-------------------------------

const studentAdmitSchema = Yup.object().shape({
  studentInfo: studentInfoSchema,
  parentsInfo: parentsInfoSchema,
  address: addressSchema,
  othersInfo: othersInfoSchema,
});

export default studentAdmitSchema;
