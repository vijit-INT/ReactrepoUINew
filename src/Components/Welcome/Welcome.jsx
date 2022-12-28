import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import * as ant from "../../assets/img/105785-loan-green.json";

export const Welcome = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ant,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={3} />

      <div className={styles.subdiv2}>
        <div className={styles.details} style={{ textAlign: "center" }}>
          <h1>Welcome to DEMO BANK</h1>
          <Lottie options={defaultOptions} height={250} width={550} />
          <h3>
            Thank you for accepting the offer. Avail of you loan<br></br> now.
            but first you need to set your<br></br> password and passcode.
          </h3>
          <button
            onClick={() => {
              navigate("/setPassword");
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};
