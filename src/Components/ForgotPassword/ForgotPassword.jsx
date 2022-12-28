import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./UserVerification.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextError from "../TextError/TextError";
import Lottie from "react-lottie";
import * as ant from "../../assets/img/63004-profile-password-unlock.json";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [visi, setVisi] = React.useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ant,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const validationSchema = Yup.object({
    mobileNumber: Yup.number()
      .min(1000000000, "Mobile number must be 10 digit")
      .required("Required"),
  });

  const handleSubmit = (values, payload) => {
    navigate("/otpValidation");
  };

  const initialValues = {
    mobileNumber: "",
  };

  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={4} />

      <div className={styles.subdiv2}>
        <div className={styles.sbd2div2}>
          <Lottie options={defaultOptions} height={270} width={270} />
          <h2>Forgot Password ?</h2>
          <h3>Enter your registered mobile number</h3>
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
                <Form className="FormDiv">
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
                    value={values.mobileNumber}
                  />
                  <br />
                  <ErrorMessage name="mobileNumber" component={TextError} />

                  <br />
                  <br />
                  <button type="submit" className="button">
                    CONTINUE
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
