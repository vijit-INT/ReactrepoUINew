import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./LoanSummary.module.css";
import { useNavigate } from "react-router-dom";

export const LoanSummary = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={5} />

      <div className={styles.subdiv2}>
        <div className={styles.details}>
          <h1>Let’s Review</h1>
          <h3>Are the following details correct?</h3>
          <div className={styles.card}>
            <h3>Personal Loan Details</h3>
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
                  <h3>Fees & Charges</h3>
                  <h3> ₹ 300.00</h3>
                </div>
                <div>
                  <h3> Net Proceeds</h3>
                  <h3> ₹ 29,700.00</h3>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.loanSummary}>
            <h3>Installment Details</h3>
            <ul>
              <li>
                <div>
                  <h3>Installment</h3>
                  <h3> ₹ 1,400.33</h3>
                </div>
                <div>
                  <h3> Due Date</h3>
                  <h3> 31.12.2022</h3>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <button className={styles.backButton}>Cancel</button>
            <button
              onClick={() => {
                navigate("/authentication");
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
