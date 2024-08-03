import * as Yup from "yup";
import { password } from "../common/commonSchemas";

// USER LOGIN SCHEMA
//----------------------------

export const userLoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required."),
  password: password.required("Password is required."),
});

// USER REGISTRATION SCHEMAS
//-----------------------------------
export const userRegistrationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .max(50, "First name must be at most 50 characters"),
  sureName: Yup.string().max(50, "Sure name must be at most 50 characters"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: password.required("Password is required"),
  studentRefCode: Yup.string()
    .required("Student reference code is required")
    .max(20, "Student reference code must be at most 20 characters"),
});
// USER ACTIVATION INPUTS SCHEMA
//---------------------------------
export const userActivationSchema = Yup.object({
  activation_code: Yup.string()
    .required("Activation code is required")
    .max(4, "Activation code must be at most 4 characters"),
});
