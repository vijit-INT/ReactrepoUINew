import React from "react";
import "../../App.css";
import ic6 from "../../assets/img/ic6.jpg";
import ic4 from "../../assets/img/ic4.png";
import styles from "./LandingPage.module.css";
import { Footer } from "../HeaderFooter/Footer";
import { useNavigate } from "react-router-dom";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.lndPage}>
      <div className={styles.lndNav}>
        <h1 style={{ paddingTop: "18px", marginLeft: "50px" }}>DEMO BANK</h1>
        <img
          src={ic6}
          style={{
            height: "40px",
            float: "right",
            marginTop: "-50px",
            marginRight: "50px",
          }}
        />
      </div>
      <div className={styles.lndSubDiv1}>
        <img src={ic4} className={styles.img1} />
      </div>
      <div className={styles.lndSubDiv2}>
        <div className={styles.lsd2div1}>
          <LockOpenOutlinedIcon  className={styles.icon}/>
          <h4>Login</h4>
          <p>
            DEMO Bank offers a pre-approved loan for select<br></br> customer.
            Check your offer and apply.
          </p>
          <button onClick={() => navigate("/existingCustomer")}>
            Existing Customer
          </button>
        </div>
        <div className={styles.lsd2div2}>
          <PersonAddOutlinedIcon className={styles.icon}/>
          <h4>New Application</h4>
          <p>
            Complete your Personal Loan application in just a few<br></br> minutes.
          </p>
          <button onClick={() => navigate("/userverification")}>
            New Customer
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
