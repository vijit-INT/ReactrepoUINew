import React from "react";
import styles from "./HeaderFooter.module.css";

export const Footer = () => {
  return (
    <>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer}>
          <div>FIND ATM/BRANCH</div>
          <div>REPORT UNAUTHORIZED TRANSACTION</div>
          <div>DOWNLOAD FORMS</div>
          <div>FAQS</div>
          <div>GET IN TOUCH</div>
          <div>GET HELP</div>
        </div>
      </div>
      <div className={styles.bottom_footer_wrapper}>
        <div>
          <div>
            <h3>EXPLORE</h3>
            <ul>
              <li>Investor Relations</li>
              <li>Regulatory Disclosure Section</li>
              <li>RBI Awareness Campaign</li>
              <li>DEMO Bank Answers</li>
              <li>Safe Banking</li>
              <li>RBI Kehta Hai</li>
              <li>RBI: Beware of Fictitious Offers</li>
              <li>Money Transfer to India</li>
              <li>Internet Banking</li>
              <li>Mobile Banking</li>
            </ul>
            <h3>AWARDS</h3>
            <ul>
              <li>2022</li>
            </ul>
          </div>
          <div>
            <h3>POPULAR PRODUCTS</h3>
            <ul>
              <li>Savings Accounts</li>
              <li>Current Accounts</li>
              <li>Credit Cards</li>
              <li>Home Loan</li>
              <li>Personal Loan</li>
              <li>Car Loan</li>
              <li>Gold Loan</li>
              <li>Fixed Deposit</li>
            </ul>
          </div>
          <div>
            <h3>CALCULATORS</h3>
            <ul>
              <li>Personal Loan EMI Calculator </li>
              <li>Car Loan EMI Calculator</li>
              <li>Two Wheeler EMI Calculator</li>
              <li>Home Loan EMI Calculator</li>
              <li>Recurring Deposit EMI Calculator</li>
              <li>Fixed Deposit EMI Calculator</li>
              <li>More Calculators</li>
            </ul>
          </div>
          <div>
            <h3>OTHERS</h3>
            <ul>
              <li>Customer Care</li>
              <li>List of Unclaimed Accounts</li>
              <li>Form center</li>
              <li>Notice Board</li>
              <li>News Room </li>
              <li>Online Assist</li>
              <li>Compliments and Complaints</li>
              <li>Site map</li>
              <li>About Us</li>
              <li>Account activation process</li>
              <li>Customer Literature on NPAs and SMAs</li>
            </ul>
            <h3>INITIATIVES</h3>
            <ul>
              <li>Debt Service</li>
              <li>Blogs</li>
              <li>The Orange Book</li>
            </ul>
          </div>
          <div>
            <h3>RATES AND CHARGES</h3>
            <ul>
              <li>Interest Rates</li>
              <li>Service Charges and Fees</li>
            </ul>
            <h3>GET SOCIAL</h3>
            <div>
              <img src="https://www.icicibank.com/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/facebook.svg" />
              <img src="https://www.icicibank.com/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/twitter.svg" />
              <img src="https://www.icicibank.com/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/linkedin.svg" />
              <img src="https://www.icicibank.com/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/youtube.svg" />
            </div>
            <h3>DOWNLOAD IMOBILE PAY</h3>
            <div>
              <img src="https://www.icicibank.com/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/app_store_white.png" />
              <img src="https://www.icicibank.com/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/google_play_white.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
