import React, { useState, useRef } from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./UserVerification.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {sendOTP} from '../../Services/otpService';
import { isValidMobileNUmber } from "../../Utils/lib";
import { RDX } from "../../Redux/Document";
import Lottie from 'react-lottie';
import animationData from '../../assets/img/lotti.json';
import { LoaderAction } from "../../Redux/Loader";

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const UserVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef();
  const [visi, setVisi] = React.useState(true);
  const [mobileNumber, setmobileNumber] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const validation = () => {
    if (!mobileNumber) {
      seterrorMessage("Please enter the mobile number");
      return false;
    }
    if (mobileNumber.length < 10) {
      seterrorMessage("Please enter a valid mobile number");
      return false;
    }
    if (!isValidMobileNUmber(mobileNumber)) {
      seterrorMessage("Please enter a valid mobile number");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    const isValidated = validation();
    dispatch(LoaderAction.loaderStart())
    if (!isValidated) {
      dispatch(LoaderAction.loaderStop())
      inputRef.current.focus();
      return;
    }
    seterrorMessage("");
    sendOTP(mobileNumber)
    .then((res)=>{
      dispatch(LoaderAction.loaderStop())
      console.log(res);
      dispatch(RDX.updateOtp(res.value));
      navigate("/otpverification");
    })
    .catch((error)=>{
      dispatch(LoaderAction.loaderStop())
      alert(error);
    })
  };

  return (
    <div className={styles.maindiv}>
       
      <Sidebar stepCompleted={1} />
      <div className={styles.subdiv2}>
        <div className={styles.sbd2div2}>
          
          <Lottie options={defaultOptions}
              height={300}
              width={300}
              
              />
              <br></br>
          <h1>May we know your mobile number?</h1>
          <h3 style={{textAlign:"left",marginLeft:"10px",color:"white"}}>Mobile Number </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              ref={inputRef}
              type="number"
              name="mobileNumber"
              placeholder="Enter Mobile Number"
              className={styles.inputTag}
              onChange={(e) => {
                e.preventDefault();
                e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 10);
                setmobileNumber(e.target.value);
              }}
            />
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
            <br />
            <br />
            <button
              type="submit"
              className="button"
              style={{ marginLeft: "0px" }}
            >
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserVerification;
