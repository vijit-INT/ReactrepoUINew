import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./UserDetails.module.css";
import TextError from "../TextError/TextError";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../Navbar/Navbar";

export const ContactDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const contactDetails = useSelector((state) => state.customer.contactDetails);

  const initialValues = {
    mobileNumber: "",
    emailId: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    city: "",
    state: "",
    zipCode: "",
  };

  const handleSubmit = (values) => {};
  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={2} />

      <div className={styles.subdiv2}>
        <div className={styles.formDiv}>
          <Formik initialValues={initialValues}>
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
                  <h3>Contact Details</h3>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className="label">Mobile Number</h3>
                      <Field
                        type="number"
                        name="mobileNumber"
                        placeholder="Enter Mobile Number"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="mobileNumber" component={TextError} />
                    </div>
                    <div>
                      <h3 className="label">Email ID</h3>
                      <Field
                        type="email"
                        name="emailId"
                        placeholder="Enter Email ID"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="emailId" component={TextError} />
                    </div>
                    <div></div>
                  </div>
                  <h3>Address Details</h3>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className="label">Address Line 1</h3>
                      <Field
                        type="text"
                        name="addressLine1"
                        placeholder="Enter Address Line 1"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="addressLine1" component={TextError} />
                    </div>
                    <div>
                      <h3 className="label">Address Line 2</h3>
                      <Field
                        type="text"
                        name="addressLine2"
                        placeholder="Enter Address Line 2"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="addressLine2" component={TextError} />
                    </div>
                    <div>
                      <h3 className="label">Address Line 3</h3>
                      <Field
                        type="text"
                        name="addressLine3"
                        placeholder="Enter Address Line 3"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="addressLine3" component={TextError} />
                    </div>
                  </div>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className="label">City</h3>
                      <Field
                        type="text"
                        name="city"
                        placeholder="Enter City"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="city" component={TextError} />
                    </div>
                    <div>
                      <h3 className="label">State</h3>
                      <Field
                        type="text"
                        name="state"
                        placeholder="Enter State"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="state" component={TextError} />
                    </div>
                    <div>
                      <h3 className="label">ZIP Code</h3>
                      <Field
                        type="text"
                        name="zipCode"
                        placeholder="Enter ZIP Code"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="zipCode" component={TextError} />
                    </div>
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
