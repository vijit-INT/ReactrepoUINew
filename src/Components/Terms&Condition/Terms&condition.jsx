import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./Terms&condition.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const TermsCondition = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, action) => {
    navigate("/documentation");
  };

  const initialValues = {
    mobileNumber: "",
    otp: "",
    checked: {
      one: false,
      two: false,
    },
  };
  return (
    <div className={styles.mainDiv}>
      <Sidebar stepCompleted={1} />
      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}>
          <img
            src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
            alt="ICICI LOGO"
          />
        </div>
        <div className={styles.sbd2div2}>
          <h2>General terms & conditions</h2>
          {/* <h3>May we know your mobile number?</h3> */}
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
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
                <Form className={styles.fromDiv}>
                  <ol>
                    <li>
                      <p>
                        A Loan Agreement, also known as a term loan, demand
                        loan, or a loan contract, is a contract that documents a
                        financial agreement between two parties, where one is
                        the lender and the other is the borrower.
                      </p>
                    </li>
                    <li>
                      <p>
                        This contract specifies the amount of the loan, any
                        interest charges, the repayment plan, and payment dates.
                        <br></br>A written contract gives both the borrower and
                        lender a clear outline of the terms of the loan.
                      </p>
                    </li>
                    <li>
                      <p>
                        If the borrower dies before paying off the loan,
                        authorities will use their assets to pay the remainder
                        of the debt.<br></br>
                        If there is a co-signer, the responsibility for the debt
                        falls to them.
                      </p>
                    </li>
                    <li>
                      <p>
                        The borrower may secure the loan with collateral such as
                        a vehicle, equipment, or jewellery.<br></br>
                        In this case, the lender may seize the collateral if the
                        borrower cannot repay the full loan amount.<br></br>
                        The lender may also require the borrower to obtain
                        insurance if using the loan to buy a vehicle.
                      </p>
                    </li>
                    <li>
                      <p>
                        The borrower repays the entire loan amount at once
                        (either by a specific date or upon notice to repay).
                      </p>
                    </li>
                  </ol>
                  <label>
                    <Field type="checkbox" name="checked.one" />
                    By checking this box, I agree to receive promotional &
                    marketing content from DEMO Bank
                  </label>
                  <h2>General</h2>
                  <ol>
                    <li>
                      <p>
                        This contract specifies the amount of the loan, any
                        interest charges, the repayment plan, and payment dates.
                        <br></br>A written contract gives both the borrower and
                        lender a clear outline of the terms of the loan.
                      </p>
                    </li>
                    <li>
                      <p>
                        The borrower may secure the loan with collateral such as
                        a vehicle, equipment, or jewellery.<br></br>
                        In this case, the lender may seize the collateral if the
                        borrower cannot repay the full loan amount.<br></br>
                        The lender may also require the borrower to obtain
                        insurance if using the loan to buy a vehicle.
                      </p>
                    </li>
                  </ol>
                  <label>
                    <Field type="checkbox" name="checked.two" />
                    By checking this box, I agree to receive promotional &
                    marketing content from DEMO Bank
                  </label>
                  <br />
                  <br />
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="button"
                    disabled={
                      values.checked.one === false ||
                      values.checked.two === false
                    }
                  >
                    CONTINUE
                  </button>
                  <ErrorMessage name="checked.one" />
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
