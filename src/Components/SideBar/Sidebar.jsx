import React from "react";
import styles from "./Sidebar.module.css";
import VerticalStepper from "./VerticalStepper";
const Sidebar = (props) => {
  return (
    <div className={styles.navbar}>
      <div>
        <h1>DEMO BANK</h1>
      </div>
      <div className={styles.sidenavList}>
        {/* <div>
          <ul>
            <li>
              <div>
                <img
                  src="https://loans.icicibank.com/loans/home-loan/assets/Images/providedetails.png"
                  alt="provide_details"
                />
                <p>Provide Details</p>
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://loans.icicibank.com/loans/home-loan/assets/Images/navoffer.png"
                  alt="provide_details"
                />
                <p>Check Offer</p>
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://loans.icicibank.com/loans/home-loan/assets/Images/navwallet.png"
                  alt="provide_details"
                />
                <p>Make Payment</p>
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://loans.icicibank.com/loans/home-loan/assets/Images/sanction.png"
                  alt="provide_details"
                />
                <p>Get Provisional Approval</p>
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://loans.icicibank.com/loans/home-loan/assets/Images/uploadDocuments.png"
                  alt="provide_details"
                />
                <p>Upload Documents</p>
              </div>
            </li>
          </ul>
        </div> */}
        <VerticalStepper stepCompleted={props.stepCompleted} />
      </div>
    </div>
  );
};

export default Sidebar;
