import React from "react";
import styles from "./HeaderFooter.module.css";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const options = [
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/bank-icon-o.svg",
      data: "ACCOUNTS",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/card-icon-o.svg",
      data: "CARDS",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/loan-icon-o.svg",
      data: "LOANS",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/invest-icon-o.svg",
      data: "INVEST",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/insure-icon-o.svg",
      data: "INSURE",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/pay-icon-o.svg",
      data: "PAY",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/offers_maroon.svg",
      data: "OFFERS",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/campus-icon.png",
      data: "CAMPUS POWER",
    },
  ];

  return (
    <>
      <div className={styles.navbar_container}>
        <div>
          <a
            href="https://www.icicibank.com/?ITM=nli_cms_HP_logo_personal_topnavigation"
            target="_self"
          >
            <img
              src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
              alt="ICICI LOGO"
            />
          </a>
        </div>
        <div className={styles.inner_container}>
          <img
            src="https://www.icicibank.com/content/dam/icicibank/icici-assets/india.svg"
            alt="INDIA FLAG"
          />
          <div className={`${styles.flex} ${styles.navbar_login}`}>
            <div>PERSONAL</div>
            <div>LOGIN</div>
          </div>
          <img
            src="https://www.icicibank.com/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/notification-animation.png"
            alt="notification"
          />
        </div>
      </div>
      <div className={styles.navbar_container}>
        <div className={styles.input_box}>
          <img src="https://icicibanksmartsearch.senseforth.com/ICICI/Images/search-input-blue.svg" />
          <input
            type=" "
            id="search-chatInput"
            autocomplete="off"
            placeholder="Search for Products, Services"
          />
          <img src="https://icicibanksmartsearch.senseforth.com/ICICI/Images/mic.svg" />
        </div>
        <div className={styles.logo_box}>
          <img src="https://www.icicibank.com/content/dam/icicibank/india/managed-assets/revamp/imobile.svg" />
          <img src="	https://www.icicibank.com/content/dam/icicibank/india/managed-assets/revamp/digital-banking.svg" />
          <div>HELP & CONTACT</div>
        </div>
      </div>
      <div className={`${styles.navbar_container} ${styles.options}`}>
        {options.map((ele, index) => {
          return (
            <div key={index}>
              { index === 2?
                <Link to='/landingpage' ><img src={ele.img} alt={ele.data} />
                <p>{ele.data}</p></Link>:<><img src={ele.img} alt={ele.data} />
                <p>{ele.data}</p></>
              }
              

            </div>
          );
        })}
        <div className={styles.apply_link}>
          <img src="https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/apply-icon.png" />
          <p>Apply Online</p>
        </div>
      </div>
    </>
  );
};
