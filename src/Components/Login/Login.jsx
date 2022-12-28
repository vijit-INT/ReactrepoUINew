import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../TextError/TextError";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "react-lottie";
import * as ant from "../../assets/img/68312-login.json";

export const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState(false);
  const initialValues = {
    mobileNumber: "",
    password: "",
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ant,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const validationSchema = Yup.object({
    mobileNumber: Yup.string()
      .required("Required")
      .min(10, "Mobile Number minimum 10 digits required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password must be 8 characters long")
      .matches(
        /[0-9]/,
        "Password must be requires a number, lowercase letter, uppercase letter, require a symbol"
      )
      .matches(
        /[a-z]/,
        "Password must be requires a number, lowercase letter, uppercase letter, require a symbol"
      )
      .matches(
        /[A-Z]/,
        "Password must be requires a number, lowercase letter, uppercase letter, require a symbol"
      )
      .matches(
        /[^\w]/,
        "Password must be requires a number, lowercase letter, uppercase letter, require a symbol"
      ),
  });

  const handleSubmit = () => {
    navigate("/loanAvailment");
  };

  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={4} />

      <div className={styles.subdiv2}>
        <div className={styles.details}>
          <div>
            <Lottie options={defaultOptions} height={190} width={190} />
            <h1>Welcome to DEMO BANK</h1>
            <h3>
              Thank you for accepting the offer. Avail of you loan now. but
              <br></br> first you need to set your password and passcode.
            </h3>
          </div>
          <div
            className="passwordDiv inputCard"
            style={{ padding: "20px 50px" }}
          >
            <Formik
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
                onInput,
                setFieldValue,
                setFieldTouched,
                submitForm,
              }) => {
                return (
                  <Form>
                    <div>
                      <h3 className="label">Mobile Number</h3>
                      <Field
                        type="number"
                        name="mobileNumber"
                        placeholder="Enter Mobile Number"
                        className={styles.inputTag}
                        onInput={(e) => {
                          e.target.value = Math.max(0, parseInt(e.target.value))
                            .toString()
                            .slice(0, 10);
                        }}
                      />
                    </div>
                    <ErrorMessage name="mobileNumber" component={TextError} />
                    <h4 className="label">Password</h4>

                    <div className={styles.marginTopBottom}>
                      <Field
                        type={state ? "text" : "password"}
                        name="password"
                        placeholder="Enter Password"
                        className={styles.inputTag}
                      />
                      <span>
                        <button
                          onClick={() => {
                            setState((prev) => !prev);
                          }}
                        >
                          {!state ? "Show" : "Hide"}
                        </button>
                      </span>
                    </div>

                    <ErrorMessage name="password" component={TextError} />
                    <Link className={styles.linkStyle} to="/forgotPassword">
                      Forgot Password ?
                    </Link>
                    <button type="submit">Login</button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
