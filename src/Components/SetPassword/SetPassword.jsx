import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./SetPassword.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextError from "../TextError/TextError";
import Lottie from "react-lottie";
import * as ant from "../../assets/img/63004-profile-password-unlock.json";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const SetPassword = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    password: false,
    confirmPassword: false,
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ant,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
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
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const handleSubmit = () => {
    navigate("/login");
  };

  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={4} />

      <div className={styles.subdiv2}>
        <div className="passwordDiv inputCard" style={{padding:"10px 50px"}}>
          <Lottie options={defaultOptions} height={270} width={270} />
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
              setFieldValue,
              setFieldTouched,
              submitForm,
            }) => {
              return (
                <Form>
                  <h3>Set Password</h3>
                  <div style={{ marginBottom: "2px" }}>
                    <Field
                      type={state.password ? "text" : "password"}
                      name="password"
                      placeholder="Enter Password"
                      className={styles.inputTag}
                    />

                    <span>
                      <div
                        onClick={() => {
                          setState((prev) => {
                            if (prev.password) {
                              return { ...prev, password: false };
                            } else {
                              return { ...prev, password: true };
                            }
                          });
                        }}
                        styles={{backgroundColor:"white"}}
                      >
                        {state.password ? <VisibilityIcon  styles={{color:"white"}}/> : <VisibilityOffIcon />}
                      </div>
                    </span>
                  </div>
                  <ErrorMessage name="password" component={TextError} />
                  <div className={styles.marginTopBottom}>
                    <Field
                      type={state.confirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Enter Confirm Password"
                      className={styles.inputTag}
                    />
                    <span>
                      <div
                        onClick={() => {
                          setState((prev) => {
                            if (prev.confirmPassword) {
                              return { ...prev, confirmPassword: false };
                            } else {
                              return { ...prev, confirmPassword: true };
                            }
                          });
                        }}
                      >
                            {state.confirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </div>
                    </span>
                  </div>
                  <ErrorMessage name="confirmPassword" component={TextError} />
                  <button type="submit" className="button">
                    CONTINUE
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
