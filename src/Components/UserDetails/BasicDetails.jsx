import React, { useEffect } from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./UserDetails.module.css";
import { Formik, Field, Form, ErrorMessage, yupToFormErrors } from "formik";
import { savePersonalDetails } from "../../Services/customerDetails";
import { useNavigate } from "react-router-dom";
import { max } from "lodash";
import * as Yup from "yup";
import TextError from "../TextError/TextError";
import { Navbar } from "../Navbar/Navbar";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getPersonalDetails } from "../../Redux/CustomerDetails";
import DatePicker from "react-datepicker";
import { LoaderAction } from "../../Redux/Loader";
import "react-datepicker/dist/react-datepicker.css";

const BasicDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const personalDetails = useSelector(
    (state) => state.customer.personalDetails
  );
  const initialValues = {
    firstName:
      personalDetails && personalDetails.firstName
        ? personalDetails.firstName
        : "",
    middleName:
      personalDetails && personalDetails.middleName
        ? personalDetails.middleName
        : "",
    lastName:
      personalDetails && personalDetails.lastName
        ? personalDetails.lastName
        : "",
    dob:
      personalDetails && personalDetails.dob
        ? moment(personalDetails.dob, "DD-MM-YYYY").toDate()
        : new Date(),
    placeOfBirth:
      personalDetails && personalDetails.placeOfBirth
        ? personalDetails.placeOfBirth
        : "",
    nationality:
      personalDetails && personalDetails.nationality
        ? personalDetails.nationality
        : "",
    incomeProofType:
      personalDetails && personalDetails.incomeProofType
        ? personalDetails.incomeProofType
        : "",
    incomeProofNumber:
      personalDetails && personalDetails.incomeProofNumber
        ? personalDetails.incomeProofNumber
        : "",
    addressProofType:
      personalDetails && personalDetails.addressProofType
        ? personalDetails.addressProofType
        : "",
    addressProofNumber:
      personalDetails && personalDetails.addressProofNumber
        ? personalDetails.addressProofNumber
        : "",
    gender:
      personalDetails && personalDetails.gender ? personalDetails.gender : "",
  };
  useEffect(() => {
    if (personalDetails) {
      if (Object.keys(personalDetails).length === 0) {
        dispatch(getPersonalDetails());
      }
    } else {
      dispatch(getPersonalDetails());
    }
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(40)
      .min(2, "Please enter a right name")
      .required("Required"),
    middleName: Yup.string().max(40),
    lastName: Yup.string().max(40),
    dob: Yup.string().required("Required"),
    placeOfBirth: Yup.string()
      .min(3, "Please Enter a right address details")
      .required("Required"),
    nationality: Yup.string().min(2).required("Required"),
    gender: Yup.string().required("Required"),
    incomeProofType: Yup.string().required("Required"),
    incomeProofNumber: Yup.string().required("Required"),
    addressProofType: Yup.string().required("Required"),
    addressProofNumber: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    const data = { ...values, dob: moment(values.dob).format("DD/MM/YYYY") };
    dispatch(LoaderAction.loaderStart());
    savePersonalDetails(data)
      .then((res) => {
        dispatch(LoaderAction.loaderStop());
        navigate("/contactDetails");
      })
      .catch((error) => {
        dispatch(LoaderAction.loaderStop());
        console.log(error);
      });
  };

  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={2} />

      <div className={styles.subdiv2}>
        <div className={styles.formDiv}>
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              setFieldValue,
              setFieldTouched,
              submitForm,
            }) => {
              return (
                <Form className="container">
                  <h3>Tell us about your basic details</h3>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className="label">First Name</h3>
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        className={styles.inputTag}
                        disabled={values.firstName !== ""}
                      />
                      <ErrorMessage name="firstName" component={TextError} />
                    </div>
                    <div>
                      <h3 className="label">Middle Name</h3>
                      <Field
                        type="text"
                        name="middleName"
                        placeholder="Enter Middle Name"
                        className={styles.inputTag}
                        disabled={values.middleName !== ""}
                      />
                      <ErrorMessage name="middleName" component={TextError} />
                    </div>
                    <div>
                      <h3 className="label">Last Name</h3>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        className={styles.inputTag}
                        disabled={values.lastName !== ""}
                      />
                      <ErrorMessage name="lastName" component={TextError} />
                    </div>
                  </div>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className="label">Date Of Birth</h3>
                      <DatePicker
                        placeholderText="dd/mm/yyyy"
                        name="dob"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        selected={values?.dob}
                        dateFormat="dd/MM/yyyy"
                        onChange={(d) => {
                          setFieldValue("dob", d);
                        }}
                      />
                      <ErrorMessage name="dob" component={TextError} />
                    </div>
                    <div>
                      <h3 className="label">Place Of Birth</h3>
                      <Field
                        type="text"
                        name="placeOfBirth"
                        placeholder="Enter Place Of Birth"
                        className={styles.inputTag}
                        disabled={values.placeOfBirth !== ""}
                      />
                      <ErrorMessage name="placeOfBirth" component={TextError} />
                    </div>
                    <div>
                      <h3 className="label">Nationality</h3>
                      <Field
                        type="text"
                        name="nationality"
                        placeholder="Enter Nationality"
                        className={styles.inputTag}
                        disabled={values.nationality !== ""}
                      />
                      <ErrorMessage name="nationality" component={TextError} />
                    </div>
                  </div>
                  <h3>Other Personal Details</h3>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className="label">Income Proof Type</h3>
                      <Field
                        type="text"
                        name="incomeProofType"
                        placeholder="Enter Income Proof Type"
                        disabled={values.incomeProofType !== ""}
                        className={styles.inputTag}
                      />
                      <ErrorMessage
                        name="incomeProofType"
                        component={TextError}
                      />
                    </div>
                    <div>
                      <h3 className="label">Income Proof Number</h3>
                      <Field
                        type="text"
                        name="incomeProofNumber"
                        placeholder="Enter Income Proof Number"
                        className={styles.inputTag}
                        disabled={values.incomeProofNumber !== ""}
                      />
                      <ErrorMessage
                        name="incomeProofNumber"
                        component={TextError}
                      />
                    </div>
                    <div>
                      <h3 className="label">Address Proof Type</h3>
                      <Field
                        type="text"
                        name="addressProofType"
                        placeholder="Enter Address Proof Type"
                        className={styles.inputTag}
                        disabled={values.addressProofType !== ""}
                      />
                      <ErrorMessage
                        name="addressProofType"
                        component={TextError}
                      />
                    </div>
                  </div>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className="label">Address Proof Number</h3>
                      <Field
                        type="text"
                        name="addressProofNumber"
                        placeholder="Enter Address Proof Number"
                        className={styles.inputTag}
                        disabled={values.addressProofNumber !== ""}
                      />
                      <ErrorMessage
                        name="addressProofNumber"
                        component={TextError}
                      />
                    </div>
                    <div>
                      <h3 className="label">Gender</h3>
                      {/* <Field
                        type="text"
                        name="gender"
                        placeholder="Enter Gender"
                        className={styles.inputTag}
                      /> */}
                      <div className={styles.radioGroup}>
                        <label>
                          <Field
                            type="radio"
                            name="gender"
                            value="Male"
                            disabled={
                              personalDetails &&
                              values.gender !== "" &&
                              values.gender !== "Male"
                            }
                          />
                          Male
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name="gender"
                            value="Female"
                            disabled={
                              personalDetails &&
                              values.gender !== "" &&
                              values.gender !== "Female"
                            }
                          />
                          Female
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name="gender"
                            value="Others"
                            disabled={
                              personalDetails &&
                              values.gender !== "" &&
                              values.gender !== "Others"
                            }
                          />
                          Others
                        </label>
                      </div>
                      <ErrorMessage name="gender" component={TextError} />
                    </div>
                    <div></div>
                  </div>
                  <button className={styles.backButton}>Cancel</button>
                  <button type="submit" className="button">
                    Continue
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
