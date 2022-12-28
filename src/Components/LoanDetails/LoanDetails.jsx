import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./LoanDetails.module.css";
import { useNavigate } from "react-router-dom";

export const LoanDetails = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={3} />

      <div className={styles.subdiv2}>
        <div className={styles.details}>
          <h1>Congratulations!</h1>
          <h3>
            Your personal loan has been approved. See approved terms below.
          </h3>
          <div className={styles.bigCard}>
            <h3>Personal Loan Details</h3>
            <p>Get the funds you need - as you need it, when you need it.</p>
            <ul>
              <li>
                <div>
                  <h3> Loan Amount</h3>
                  <h3> ₹ 75,000.00</h3>
                </div>
                <div>
                  <h3> Loan Tenure</h3>
                  <h3> 36 Months</h3>
                </div>
                <div>
                  <h3> Interest Rate</h3>
                  <h3> 1.89%</h3>
                </div>
                <div>
                  <h3> Installment</h3>
                  <h3> ₹ 2,555.85</h3>
                </div>
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              navigate("/loanAgreement");
            }}
          >
            Loan Agreement
          </button>
        </div>
      </div>
    </div>
  );
};
