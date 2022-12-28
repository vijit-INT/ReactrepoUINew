import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./LoanAvailment.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const LoanAvailment = () => {
  const navigate = useNavigate();
  const initialValues = {
    tenor: "12",
    loanAmount: "30000",
  };
  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={5} />

      <div className={styles.subdiv2}>
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
              <Form>
                <div className={styles.loanAvail}>
                  <h3>Tenor</h3>
                  <div>
                    <label className={styles.labl}>
                      <Field type="radio" name="tenor" value="6" />
                      <div>6 Months</div>
                    </label>
                    <label className={styles.labl}>
                      <Field type="radio" name="tenor" value="12" />
                      <div>12 Months</div>
                    </label>
                    <label className={styles.labl}>
                      <Field type="radio" name="tenor" value="18" />
                      <div>18 Months</div>
                    </label>
                  </div>
                  <h3>Loan Amount</h3>
                  <div>
                    <label className={styles.labl}>
                      <Field type="radio" name="loanAmount" value="15000" />
                      <div>15K</div>
                    </label>
                    <label className={styles.labl}>
                      <Field type="radio" name="loanAmount" value="30000" />
                      <div>30K</div>
                    </label>
                    <label className={styles.labl}>
                      <Field type="radio" name="loanAmount" value="45000" />
                      <div>45K</div>
                    </label>
                    <label className={styles.labl}>
                      <Field type="radio" name="loanAmount" value="60000" />
                      <div>60K</div>
                    </label>
                  </div>
                  <div>
                    <h2>₹ 30,000.00</h2>
                    <div>
                      <div>Installment</div>
                      <div>₹ 1,400.33</div>
                    </div>
                    <div>
                      <div>Interest Date</div>
                      <div>1.89%</div>
                    </div>
                  </div>
                  <div>
                    <label>Purpose</label>
                    <select>
                      <option value="">Purchase of household appliance</option>
                    </select>
                  </div>
                  <p>
                    Your loan proceeds will be credited to the XXXIIIX XIIXIX
                    savings account.
                  </p>
                  <button className={styles.backButton}>Avail Later</button>
                  <button
                    onClick={() => {
                      navigate("/loanSummary");
                    }}
                  >
                    Avail Now
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
