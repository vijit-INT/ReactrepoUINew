import React, { useEffect, useState, useRef } from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./Authentication.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextError from "../TextError/TextError.jsx";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import OtpInput from "react18-input-otp";
import { hover } from "@testing-library/user-event/dist/hover";

const Authentication = () => {
  const navigate = useNavigate();

  const [secondsString, setsecondsString] = useState("30");
  const [resendCount, setresendCount] = useState(0);
  let timerVar = null;
  const timerFunctions = () => {
    if (timerVar) return;
    localStorage.setItem("timer", JSON.stringify(30));
    timerVar = setInterval(() => {
      let seconds = JSON.parse(localStorage.getItem("timer"));
      if (parseInt(seconds) == 1) {
        clearInterval(timerVar);
        setsecondsString("");
        timerVar = null;
        return;
      }
      localStorage.setItem("timer", JSON.stringify(parseInt(seconds) - 1));
      setsecondsString(parseInt(seconds) - 1);
    }, 1000);
  };
  useEffect(() => {
    timerFunctions();
  }, []);
  const [otp, setOtp] = useState("");
  const [prevOtp, setPrevOtp] = useState();
  const otpRef = useRef(null);
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
    setPrevOtp(otp);
  };
  useEffect(() => {
    if (otp?.length < prevOtp?.length)
      otpRef.current.focusInput(otp.length - 1);
  }, [otp]);

  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={6} />

      <div className={styles.subdiv2}>
        <div className={styles.sbd2div2}>
          <h2>Enter the OTP we send to +91 XXX XXX X298</h2>
          <h3>OTP</h3>
          <div>
            <OtpInput
              ref={otpRef}
              value={otp}
              inputStyle={{
                width: "50px",
                height: "50px",
                boxShadow: "5px 5px 5px #ae9d9d",
                borderRadius: "5px",
              }}
              className={styles.inputStyleAgain}
              onChange={(e) => {
                if (!/[0-9]/.test(e) && e != "") {
                  return;
                }
                handleChange(e);
              }}
              numInputs={6}
              separator={<span style={{ width: "20px" }}></span>}
            />
            {secondsString && (
              <p style={{ color: "red" }}>Resend in {secondsString} seconds</p>
            )}

            <br></br>
            <br></br>
            <br></br>

            {!secondsString && resendCount < 3 && (
              <button
                className={styles.backButton}
                onClick={(e) => {
                  e.preventDefault();
                  timerFunctions();

                  setresendCount(resendCount + 1);
                }}
              >
                Resend
              </button>
            )}
            {
              <button
                onClick={(e) => {
                  e.preventDefault();
                  otpRef.current.focusInput(1);
                  navigate("/congratulations");
                }}
                disabled={otp.length < 6}
              >
                Submit
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
