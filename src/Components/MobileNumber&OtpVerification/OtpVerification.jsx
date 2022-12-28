import React, { useEffect, useState, useRef } from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./UserVerification.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-modal/styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "react-responsive-modal";
import OtpInput from "react18-input-otp";
import { isNUmbeStringOnly } from "../../Utils/lib";
import { validateOrResendOTP } from "../../Services/otpService";
import { RDX } from "../../Redux/Document";
import Swal from "sweetalert2";
import Lottie from "react-lottie";
import * as ant from "../../assets/img/qRQge6gRvh.json";
import { LoaderAction } from "../../Redux/Loader";

const OtpVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [secondsString, setsecondsString] = useState("30");
  const [resendCount, setresendCount] = useState(0);
  const [otp, setOtp] = useState("");
  const [prevOtp, setPrevOtp] = useState();
  const otpRef = useRef(null);
  const OTP = useSelector((state) => state.dState.otp);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ant,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const count = 0;
  useEffect(() => {
    if (OTP) {
      toast(OTP);
      dispatch(RDX.updateOtp(""));
    }
  }, [OTP]);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

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

  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
    setPrevOtp(otp);
  };
  useEffect(() => {
    if (otp?.length < prevOtp?.length)
      otpRef.current.focusInput(otp.length - 1);
  }, [otp]);

  function OtpVerification() {
    dispatch(LoaderAction.loaderStart());
    validateOrResendOTP(otp)
      .then((res) => {
        dispatch(LoaderAction.loaderStop())
        navigate("/documentation");
      })
      .catch((error) => {
        dispatch(LoaderAction.loaderStop())
        Swal.fire({
          title: "Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  }
  function Otpresend() {
    //otp
    validateOrResendOTP()
      .then((res) => {
        dispatch(LoaderAction.loaderStop())
        timerFunctions();
        dispatch(RDX.updateOtp(res.value));
      })
      .catch((error) => {
        dispatch(LoaderAction.loaderStop())
        console.log(error);
        Swal.fire({
          title: "Failed!",
          text: "Failed To Resend",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  }

  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={1} />
      <ToastContainer autoClose={false} />

      <div className={styles.subdiv2}>
        <div className={styles.sbd2div2}>
          <Lottie options={defaultOptions} height={270} width={270} />

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
                backgroundColor: "white",
                borderRadius: "5px",
              }}
              containerStyle={{
                justifyContent: "center",
              }}
              onChange={(e) => {
                if (!isNUmbeStringOnly(e) && e != "") {
                  otpRef.current.focusInput(otp.length);
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
            <label className={styles.label}>
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => setCheck(!check)}
              />
              By checking this box, I agree to receive promotional & marketing
              content from DEMO Bank <br></br>
              <a onClick={onOpenModal}>view details</a>
            </label>
            <br></br>
            <br></br>
            <br></br>

            {!secondsString && resendCount < 3 && (
              <button
                className={styles.backButton}
                onClick={(e) => {
                  e.preventDefault();

                  Otpresend();
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
                  OtpVerification();
                  // navigate("/documentation");
                }}
                disabled={otp.length < 6 || check == false}
              >
                Submit
              </button>
            }
          </div>

          <Modal open={open} onClose={onCloseModal}>
            <h2 style={{ color: "#053c6d" }}>General terms & conditions</h2>
            <ol>
              <li>
                <p>
                  A Loan Agreement, also known as a term loan, demand loan, or a
                  loan contract, is a contract that documents a financial
                  agreement between two parties, where one is the lender and the
                  other is the borrower.
                </p>
              </li>
              <li>
                <p>
                  This contract specifies the amount of the loan, any interest
                  charges, the repayment plan, and payment dates.<br></br>A
                  written contract gives both the borrower and lender a clear
                  outline of the terms of the loan.
                </p>
              </li>
              <li>
                <p>
                  If the borrower dies before paying off the loan, authorities
                  will use their assets to pay the remainder of the debt.
                  <br></br>
                  If there is a co-signer, the responsibility for the debt falls
                  to them.
                </p>
              </li>
              <li>
                <p>
                  The borrower may secure the loan with collateral such as a
                  vehicle, equipment, or jewellery.<br></br>
                  In this case, the lender may seize the collateral if the
                  borrower cannot repay the full loan amount.<br></br>
                  The lender may also require the borrower to obtain insurance
                  if using the loan to buy a vehicle.
                </p>
              </li>
              <li>
                <p>
                  The borrower repays the entire loan amount at once (either by
                  a specific date or upon notice to repay).
                </p>
              </li>
            </ol>
            <h2 style={{ color: "#053c6d" }}>General</h2>
            <ol>
              <li>
                <p>
                  This contract specifies the amount of the loan, any interest
                  charges, the repayment plan, and payment dates.<br></br>A
                  written contract gives both the borrower and lender a clear
                  outline of the terms of the loan.
                </p>
              </li>
              <li>
                <p>
                  The borrower may secure the loan with collateral such as a
                  vehicle, equipment, or jewellery.<br></br>
                  In this case, the lender may seize the collateral if the
                  borrower cannot repay the full loan amount.<br></br>
                  The lender may also require the borrower to obtain insurance
                  if using the loan to buy a vehicle.
                </p>
              </li>
            </ol>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
