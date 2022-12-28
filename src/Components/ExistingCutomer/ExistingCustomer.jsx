import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./ExistingCustomer.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../TextError/TextError";
import { useNavigate, Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ExistingCustomer = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState(false);
  const initialValues = {
    mobileNumber: "",
    password: "",
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
            <h1>Welcome to DEMO BANK</h1>
            <h3>Log in to your account</h3>
          </div>
          <div className="passwordDiv inputCard">
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
                        <div
                          onClick={() => {
                            setState((prev) => !prev);
                          }}
                        >
                        {state ? <VisibilityIcon  styles={{color:"white"}}/> : <VisibilityOffIcon />}
                        </div>
                      </span>
                    </div>

                    <ErrorMessage name="password" component={TextError} />
                    <Link className={styles.linkStyle} to="/forgotPassword">
                      Forgot Password ?
                    </Link>
                    <button type="submit">Login</button>
                    <button>Login with OTP</button>
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

export default ExistingCustomer;
