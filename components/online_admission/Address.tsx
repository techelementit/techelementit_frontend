"use client";
import React, { FC, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import FormWrapper from "../common/FormWrapper";
import LabelInputErrorWrapper from "../common/LabelInputErrorWrapper";

interface IAddressProps {
  formik: any;
  lang: string;
  address: any;
}

const Address: FC<IAddressProps> = ({ formik, lang, address }) => {
  const [addressSame, setAddressSame] = useState(false);
  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = formik;

  const { present, permanent } = address;

  // console.log("values", values.address);
  // console.log(errors, "errors");

  // FUNCTION TO ADD PRESENT ADDRESS AS PERMANENT ADDRESS
  const presentPremanentHandler = () => {
    setAddressSame(!addressSame);
    if (!addressSame) {
      setValues({
        ...values,
        address: {
          ...values.address,
          permanent: values.address.present,
        },
      });
    } else {
      setValues({
        ...values,
        address: {
          ...values.address,
          permanent: {
            town: "",
            postOffice: "",
            district: "",
            upazila: "",
            division: "",
          },
        },
      });
    }
  };
  return (
    <div className="mt-12">
      <FormWrapper
        size="full"
        heading={
          lang === "en"
            ? "Present & Permanent Address"
            : "বর্তমান ও স্থায়ী ঠিকানা"
        }
      >
        {/* STUDENT PRESENT ADDRESS */}
        {/* -------------------------- */}

        <h5
          className={`form-heading-secondary ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        >
          {lang === "en" ? "Present Address" : "বর্তমান ঠিকানা"}
        </h5>
        {/*  PRESENT TOWN AND POST OFFICE ADDRESS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
          {/* PRESENT TOWN OR VILLAGE ADDRESS*/}
          <LabelInputErrorWrapper>
            <label
              htmlFor="presentTown"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {present.town.label[lang]}
            </label>
            <input
              type="text"
              name="address.present.town"
              value={values?.address?.present?.town}
              onChange={handleChange}
              onBlur={handleBlur}
              id="presentTown"
              placeholder={present.town.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.address?.present?.town &&
              touched.address?.present?.town && (
                <span className="input-error">
                  Present {errors.address?.present?.town.toLowerCase()}
                </span>
              )}
          </LabelInputErrorWrapper>
          {/* PRESENT POST OFFICE ADDRESS*/}
          <LabelInputErrorWrapper>
            <label
              htmlFor="presentPostOffice"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {present.postOffice.label[lang]}
            </label>
            <input
              type="text"
              name="address.present.postOffice"
              value={values?.address?.present?.postOffice}
              onChange={handleChange}
              onBlur={handleBlur}
              id="presentPostOffice"
              placeholder={present.postOffice.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.address?.present?.postOffice &&
              touched.address?.present?.postOffice && (
                <span className="input-error">
                  Present {errors.address?.present?.postOffice.toLowerCase()}
                </span>
              )}
          </LabelInputErrorWrapper>
        </div>

        {/*  PRESENT DISTRICT AND POLICE OFFICE ADDRESS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
          {/*  PRESENT DISTRICT  ADDRESS */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="presentDistrict"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {present.district.label[lang]}
            </label>
            <input
              type="text"
              name="address.present.district"
              value={values?.address?.present?.district}
              onChange={handleChange}
              onBlur={handleBlur}
              id="presentDistrict"
              placeholder={present.district.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.address?.present?.district &&
              touched.address?.present?.district && (
                <span className="input-error">
                  Present {errors.address?.present?.district.toLowerCase()}
                </span>
              )}
          </LabelInputErrorWrapper>
          {/*  PRESENT POLICE OFFICE ADDRESS */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="presentupazila"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {present.upazila.label[lang]}
            </label>
            <input
              type="text"
              name="address.present.upazila"
              value={values?.address?.present?.upazila}
              onChange={handleChange}
              onBlur={handleBlur}
              id="presentupazila"
              placeholder={present.upazila.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.address?.present?.upazila &&
              touched.address?.present?.upazila && (
                <span className="input-error">
                  Present {errors.address?.present?.upazila.toLowerCase()}
                </span>
              )}
          </LabelInputErrorWrapper>
        </div>
        {/*  PRESENT DIVISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
          {/*  PRESENT DIVISION*/}
          <LabelInputErrorWrapper>
            <label
              htmlFor="presentDivision"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {present.division.label[lang]}
            </label>
            <input
              type="text"
              name="address.present.division"
              value={values?.address?.present?.division}
              onChange={handleChange}
              onBlur={handleBlur}
              id="presentDivision"
              placeholder={present.division.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.address?.present?.division &&
              touched.address?.present?.division && (
                <span className="input-error">
                  Present {errors.address?.present?.division.toLowerCase()}
                </span>
              )}
          </LabelInputErrorWrapper>

          {/* NATIONALITY */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="presentNationality"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {present.nationality.label[lang]}
            </label>
            <input
              type="text"
              name="address.present.nationality"
              value={values?.address?.present?.nationality}
              onChange={handleChange}
              onBlur={handleBlur}
              id="presentNationality"
              placeholder={present.nationality.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.address?.present?.nationality &&
              touched.address?.present?.nationality && (
                <span className="input-error">
                  Permanent {errors.address?.present?.nationality.toLowerCase()}
                </span>
              )}
          </LabelInputErrorWrapper>
        </div>
      </FormWrapper>

      <div
        className={`inline 
        ${
          (!values?.address?.present?.town ||
            !values?.address?.present?.postOffice ||
            !values?.address?.present?.upazila ||
            !values?.address?.present?.district ||
            !values?.address?.present?.nationality ||
            !values?.address?.present?.division) &&
          "cursor-not-allowed opacity-40 pointer-events-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        }
        
        `}
      >
        <Checkbox
          className={`duration-500 ${
            (!values?.address?.present?.town ||
              !values?.address?.present?.postOffice ||
              !values?.address?.present?.upazila ||
              !values?.address?.present?.district ||
              !values?.address?.present?.nationality ||
              !values?.address?.present?.division) &&
            "cursor-not-allowed opacity-40 pointer-events-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          }`}
          onClick={() => presentPremanentHandler()}
          id="presentpermanentSame"
        />
        <label
          htmlFor="presentpermanentSame"
          className={`ml-2 text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer select-none ${
            lang === "en" ? "font-poppins" : "font-anek"
          } ${
            (!values?.address?.present?.town ||
              !values?.address?.present?.postOffice ||
              !values?.address?.present?.upazila ||
              !values?.address?.present?.district ||
              !values?.address?.present?.division) &&
            "cursor-not-allowed opacity-40 pointer-events-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          }`}
        >
          {lang === "en"
            ? "Present and Permannent address will be same"
            : "বর্তমান ও স্থায়ী ঠিকানা অনুরূপ"}
        </label>
      </div>

      {/* STUDENT PERMANENT ADDRESS */}
      {/* -------------------------- */}

      {addressSame || (
        <>
          <h5
            className={`form-heading-secondary ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {lang === "en" ? "Permanent Address" : "স্থায়ী ঠিকানা"}
          </h5>
          {/*  PERMANENT TOWN AND POST OFFICE ADDRESS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
            {/* PERMANENT TOWN OR VILLAGE ADDRESS*/}
            <LabelInputErrorWrapper>
              <label
                htmlFor="permanentTown"
                className={`input-label ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {permanent.town.label[lang]}
              </label>
              <input
                type="text"
                name="address.permanent.town"
                value={values?.address?.permanent?.town}
                onChange={handleChange}
                onBlur={handleBlur}
                id="permanentTown"
                placeholder={permanent.town.placeholder[lang]}
                className={`input-field ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              />
              {errors.address?.permanent?.town &&
                touched.address?.permanent?.town && (
                  <span className="input-error">
                    Permanent {errors.address?.permanent?.town.toLowerCase()}
                  </span>
                )}
            </LabelInputErrorWrapper>
            {/* PERMANENT POST OFFICE ADDRESS*/}
            <LabelInputErrorWrapper>
              <label
                htmlFor="permanentPostOffice"
                className={`input-label ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {permanent.postOffice.label[lang]}
              </label>
              <input
                type="text"
                name="address.permanent.postOffice"
                value={values?.address?.permanent?.postOffice}
                onChange={handleChange}
                onBlur={handleBlur}
                id="permanentPostOffice"
                placeholder={permanent.postOffice.placeholder[lang]}
                className={`input-field ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              />
              {errors.address?.permanent?.postOffice &&
                touched.address?.permanent?.postOffice && (
                  <span className="input-error">
                    Permanent{" "}
                    {errors.address?.permanent?.postOffice.toLowerCase()}
                  </span>
                )}
            </LabelInputErrorWrapper>
          </div>

          {/*  PERMANENT DISTRICT AND POLICE OFFICE ADDRESS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
            {/*  PERMANENT DISTRICT  ADDRESS */}
            <LabelInputErrorWrapper>
              <label
                htmlFor="permanentDistrict"
                className={`input-label ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {permanent.district.label[lang]}
              </label>
              <input
                type="text"
                name="address.permanent.district"
                value={values?.address?.permanent?.district}
                onChange={handleChange}
                onBlur={handleBlur}
                id="permanentDistrict"
                placeholder={permanent.district.placeholder[lang]}
                className={`input-field ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              />
              {errors.address?.permanent?.district &&
                touched.address?.permanent?.district && (
                  <span className="input-error">
                    Permanent{" "}
                    {errors.address?.permanent?.district.toLowerCase()}
                  </span>
                )}
            </LabelInputErrorWrapper>
            {/*  PERMANENT POLICE OFFICE ADDRESS */}
            <LabelInputErrorWrapper>
              <label
                htmlFor="permanentUpazila"
                className={`input-label ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {permanent.upazila.label[lang]}
              </label>
              <input
                type="text"
                name="address.permanent.upazila"
                value={values?.address?.permanent?.upazila}
                onChange={handleChange}
                onBlur={handleBlur}
                id="permanentUpazila"
                placeholder={permanent.upazila.placeholder[lang]}
                className={`input-field ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              />
              {errors.address?.permanent?.upazila &&
                touched.address?.permanent?.upazila && (
                  <span className="input-error">
                    Permanent {errors.address?.permanent?.upazila.toLowerCase()}
                  </span>
                )}
            </LabelInputErrorWrapper>
          </div>
          {/*  PERMANENT DIVISION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
            {/*  PERMANENT DIVISION*/}
            <LabelInputErrorWrapper>
              <label
                htmlFor="permanentDivision"
                className={`input-label ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {permanent.division.label[lang]}
              </label>
              <input
                type="text"
                name="address.permanent.division"
                value={values?.address?.permanent?.division}
                onChange={handleChange}
                onBlur={handleBlur}
                id="permanentDivision"
                placeholder={permanent.division.placeholder[lang]}
                className={`input-field ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              />
              {errors.address?.permanent?.division &&
                touched.address?.permanent?.division && (
                  <span className="input-error">
                    Permanent{" "}
                    {errors.address?.permanent?.division.toLowerCase()}
                  </span>
                )}
            </LabelInputErrorWrapper>

            {/* NATIONALITY */}
            <LabelInputErrorWrapper>
              <label
                htmlFor="permanentNationality"
                className={`input-label ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {permanent.nationality.label[lang]}
              </label>
              <input
                type="text"
                name="address.permanent.nationality"
                value={values?.address?.permanent?.nationality}
                onChange={handleChange}
                onBlur={handleBlur}
                id="permanentNationality"
                placeholder={permanent.nationality.placeholder[lang]}
                className={`input-field ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              />
              {errors.address?.permanent?.nationality &&
                touched.address?.permanent?.nationality && (
                  <span className="input-error">
                    Permanent{" "}
                    {errors.address?.permanent?.nationality.toLowerCase()}
                  </span>
                )}
            </LabelInputErrorWrapper>
          </div>
        </>
      )}
    </div>
  );
};

export default Address;
