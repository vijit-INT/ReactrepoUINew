import React, { useEffect } from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./EmploymentFinancialDetails.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEmploymentDetails } from "../../Redux/EmploymentFinancialDetails";
import { getFinancialDetails } from "../../Redux/EmploymentFinancialDetails";

export const EmploymentFinancialDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employmentDetails = useSelector(
    (state) => state.employee.employmentDetails
  );
  const financialDetails = useSelector(
    (state) => state.employee.financialDetails
  )

  useEffect(() => {
    if (employmentDetails) {
      if (Object.keys(employmentDetails).length === 0) {
        dispatch(getEmploymentDetails());
      }
    } else {
      dispatch(getEmploymentDetails());
    }

    if (financialDetails) {
      if (Object.keys(financialDetails).length === 0) {
        dispatch(getFinancialDetails());
      }
    } else {
      dispatch(getFinancialDetails());
    }


  }, []);

  const initialValues = {
    accountPurpose:
      financialDetails && financialDetails.accountPurpose
        ? financialDetails.accountPurpose
        : "",
    fundsSource:
      financialDetails && financialDetails.fundsSource
        ? financialDetails.fundsSource
        : "",
    monthlyIncome:
      financialDetails && financialDetails.monthlyIncome
        ? financialDetails.monthlyIncome
        : "",
    salaryCreditDate: financialDetails && financialDetails.salaryCreditDate
      ? financialDetails.salaryCreditDate
      : "",
    employmentType:
      employmentDetails && employmentDetails.employmentType
        ? employmentDetails.employmentType
        : "",
    employmentStatus:
      employmentDetails && employmentDetails.employmentStatus
        ? employmentDetails.employmentStatus
        : "",
    natureOfWork:
      employmentDetails && employmentDetails.natureOfWork
        ? employmentDetails.natureOfWork
        : "",
    employerName:
      employmentDetails && employmentDetails.employerName
        ? employmentDetails.name
        : "",
    employerAddress:
      employmentDetails && employmentDetails.employerAddress
        ? employmentDetails.employerAddress
        : "",
    industryType:
      employmentDetails && employmentDetails.industryType
        ? employmentDetails.industryType
        : "",
    position:
      employmentDetails && employmentDetails.position
        ? employmentDetails.position
        : "",
  };

  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={2} />

      <div className={styles.subdiv2}>
        <div className={styles.formDiv}>
          <Formik initialValues={initialValues} enableReinitialize={true}>
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
                  <h3>Tell us about your Financial Details</h3>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className="label">Purpose for Opening Account</h3>
                      <Field
                        as="select"
                        name="accountPurpose"
                        className={styles.inputTag}
                        value="Demo Text"
                        disabled={ values.accountPurpose !== "" }
                      >
                        <option value="">Demo Text</option>
                      </Field>
                      <ErrorMessage name="accountPurpose" />
                    </div>
                    <div>
                      <h3 className="label">Source of Funds</h3>
                      <Field
                        as="select"
                        name="fundsSource"
                        className={styles.inputTag}
                        value="Employment"
                        disabled={ values.fundsSource !== "" }
                      >
                        <option value="">Employment</option>
                      </Field>
                      <ErrorMessage name="fundsSource" />
                    </div>
                    <div>
                      <h3 className="label">Monthly Income</h3>
                      <Field
                        type="text"
                        name="monthlyIncome"
                        placeholder="Enter Monthly Income"
                        className={styles.inputTag}
                        value="₹ 2,259.00"
                        disabled={ values.monthlyIncome !== "" }
                      />
                      <ErrorMessage name="monthlyIncome" />
                    </div>
                  </div>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className="label">Choose Salary Credit Date</h3>
                      <Field
                        as="select"
                        name="salaryCreditDate"
                        className={styles.inputTag}
                        value="Within 5th"
                        disabled={ values.salaryCreditDate !== "" }
                      >
                        <option value="">Within 5th</option>
                      </Field>
                      <ErrorMessage name="salaryCreditDate" />
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                  <h3>Employment Details</h3>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className="label">Employment Type</h3>
                      <Field
                        as="select"
                        name="employmentType"
                        className={styles.inputTag}
                        value="Employed"
                        disabled={ values.employmentType !== "" }
                      >
                        <option value="">Employed</option>
                      </Field>
                      <ErrorMessage name="employmentType" />
                    </div>
                    <div>
                      <h3 className="label">Employment Status</h3>
                      <Field
                        as="select"
                        name="employmentStatus"
                        className={styles.inputTag}
                        value="Probationary"
                        disabled={values.employmentStatus !== ""}
                      >
                        <option value="">Employed</option>
                      </Field>
                      <ErrorMessage name="employmentStatus" />
                    </div>
                    <div>
                      <h3 className="label">Nature Of Work</h3>
                      <Field
                        as="select"
                        name="natureOfWork"
                        className={styles.inputTag}
                        value="Agriculture, Fishing"
                        disabled={values.natureOfWork !== ""}
                      >
                        <option value="">Agriculture, Fishing</option>
                      </Field>
                      <ErrorMessage name="natureOfWork" />
                    </div>
                  </div>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className="label">Employer Name</h3>
                      <Field
                        type="text"
                        name="employerName"
                        placeholder="Enter Employer Name"
                        className={styles.inputTag}
                        value="Puma"
                        disabled={values.employerName !== ""}
                      />
                      <ErrorMessage name="employerName" />
                    </div>
                    <div>
                      <h3 className="label">Employer Address</h3>
                      <Field
                        type="text"
                        name="employerAddress"
                        placeholder="Enter Employer Address"
                        className={styles.inputTag}
                        value="100 C. R. Avenue"
                        disabled={values.employerAddress !== ""}
                      />
                      <ErrorMessage name="employerAddress" />
                    </div>
                    <div>
                      <h3 className="label">Industry Type</h3>
                      <Field
                        as="select"
                        name="industryType"
                        className={styles.inputTag}
                        value="Aviation/Airline"
                        disabled={values.industryType !== ""}
                      >
                        <option value="">Aviation / Airline</option>
                      </Field>
                      <ErrorMessage name="industryType" />
                    </div>
                  </div>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className="label">Position</h3>
                      <Field
                        as="select"
                        name="position"
                        className={styles.inputTag}
                        value="Demo"
                        disabled={values.position !== ""}
                      >
                        <option value="">Demo</option>
                      </Field>
                      <ErrorMessage name="position" />
                    </div>
                  </div>

                  <button className={styles.backButton}>Cancel</button>
                  <button
                    type="submit"
                    className="button"
                    onClick={() => navigate("/loanDetails")}
                  >
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
