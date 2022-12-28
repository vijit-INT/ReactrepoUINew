import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./Congratulations.module.css";
import { useNavigate } from "react-router-dom";


export const Congratulations = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.maindiv}>
  
      <Sidebar stepCompleted={7} />

      <div className={styles.subdiv2}>
        <div className={styles.details}>
          <h1>Congratulations!</h1>
          <h3>
            We are informing you that our bank has received your application for
            Personal Loan . We are happy to inform you that your Personal Loan
            request has been approved and is currently being processed. Further,
            we inform you that we have sent an email containing attached
            documents. Also we have sent you the terms and conditions of the
            loans sanctioned. We would like to schedule your meeting with the
            finance officer of the company for any further information and
            clarifications that you might wish to know.
          </h3>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
