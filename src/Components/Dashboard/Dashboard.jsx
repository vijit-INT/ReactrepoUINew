import React from "react";
import "../../App.css";
import ic1 from "../../assets/img/ic1.png";
import ic2 from "../../assets/img/ic2.png";
import ic3 from "../../assets/img/ic3.png";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { Header } from "../HeaderFooter/Header";
import { Footer } from "../HeaderFooter/Footer";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className={styles.dashmainContainer1}>
        <div className={styles.dashsubContainer}>
          <h1>
            Loans - One Stop Solutions For All Your<br></br> Financial Needs
          </h1>
          <p>
            Build the house you have been thinking of. Buy the car of your{" "}
            <br></br>
            dreams. Take that long-pending vacation. Get your children enrolled
            <br></br>
            in the top schools. Do all this and more with loans from DEMO Bank.
            <br></br>
            We offer a wide variety of loans to suit each one of your<br></br>
            requirements. Take a look at the products we offer and see for
            <br></br>
            yourself how versatile our range of loans is.
          </p>
          <a href="https://www.indusnet.co.in/" target="_blank" rel="noreferrer" style={{paddingRight:"30px"}}> 
          <button >Know More</button>
          </a>
          <button onClick={() => navigate("/landingpage")}>
            Apply Home Loan
          </button>
          <br></br>
          <button
            style={{ marginTop: "10px" }}
            onClick={() => navigate("/landingpage")}
          >
            Apply Personal Loan
          </button>
        </div>
        <div className={styles.dashsubContainer} style={{ marginLeft: "8%" }}>
          <img
            className={styles.dashImg}
            src={ic1}
            style={{ borderRadius: "50px" }}
          />
        </div>
      </div>
      <div className={styles.dashMainContainer2}>
        <h1>Loans - One Stop Solutions For All Your Financial Needs</h1>
        <div className={styles.dc2sub1}>
          <div className={styles.dc2sub1box1}>
            <h4>Cardless EMI</h4>
            <p>Buy your favourite gadget on EMI without carrying a wallet!</p>
            <button>Know More</button>
          </div>
          <div className={styles.dc2sub1box1}>
            <h4>Home Loan</h4>
            <p>
              Getting a home loan from DEMO Bank is quick and easy. We have an
              accommodating eligibility criteria and we offer lower EMIs at
              attractive interest rates.
              <br></br>
              <br></br>
              Click on the button below to get approved instantly*
            </p>

            <button>GET INSTANT E-APPROVAL</button>
          </div>
          <div className={styles.dc2sub1box1}>
            <h4>Loan Against Property</h4>
            <p>
              Got a property that you can mortgage in exchange for a loan? Then
              you can avail DEMO Bank’s Loan Against Property (LAP) for your
              business or personal needs. Mortgage both residential and
              commercial properties and enjoy comfortable EMIs over long tenures
              going up to 15 years.
              <br></br>
              <br></br>
              Click on the button below to get approved instantly*
            </p>
            <button>Know More</button>
          </div>

          <div className={styles.dc2sub1box1}>
            <h4>Car Loan</h4>
            <p>
              With an extensive network of multiple channel partners in a number
              of locations, DEMO Bank is among the most preferred financiers for
              car loans in the country. Our tie-ups with the leading automobile
              manufacturers ensure that you get the best deals. Choose our car
              loans to enjoy flexible schemes, a simple application process and
              quick loan processing at the click of a mouse.
              <br></br>
              <br></br>
              Click on the button below to get approved instantly*
            </p>
            <button>GET INSTANT E-APPROVAL</button>
          </div>
          <div className={styles.dc2sub1box1}>
            <h4>Personal Loan</h4>
            <p>
              What do you desire? A dream holiday? A destination wedding? Some
              home renovation, or the latest gadgets? Make all of these dreams
              come true with personal loans from DEMO Bank. We offer loans up to
              ₹20 lakh at interest rates starting from as low as 10.50%.
              <br></br>
              <br></br>
              Click on the button below to get approved instantly*
            </p>
            <button>GET INSTANT E-APPROVAL</button>
          </div>
          <div className={styles.dc2sub1box1}>
            <h4>Consumer Finance</h4>
            <p>
              Why hold yourself back from getting your favourite gadgets when
              you have DEMO Bank’s Consumer Finance to back you up? Avail of
              this loan from us and get your hands on that device you’ve been
              eyeing or that consumer electronics product you need and pay for
              it in easy Equated Monthly Instalments (EMIs).
              <br></br>
              <br></br>
              Click on the button below to get approved instantly*
            </p>
            <button>Know More</button>
          </div>
          <div className={styles.dc2sub1box1}>
            <h4>Education loan</h4>
            <p>
              Perhaps you have just excelled in your exams and are looking for
              the right institute to enrol in. Maybe you’re planning to take a
              break from your career to study further. Or perhaps, you’re
              looking for the top universities for your children. Whatever be
              your reason, your search for the best educational institute must
              not be bogged down with worries about finance. Here’s where DEMO
              Bank’s Education Loans can help.
              <br></br>
              <br></br>
              Click on the button below to get approved instantly*
            </p>
            <button>Know More</button>
          </div>
          <div className={styles.dc2sub1box1}>
            <h4>Gold Loan</h4>
            <p>
              Avail a loan against gold and gold ornaments from DEMO Bank and
              meet your emergency financial needs without any hassle. With this
              loan, you can obtain funds against your gold and gold ornaments
              without having to sell them.
              <br></br>
              <br></br>
              Click on the button below to get approved instantly*
            </p>
            <button>APPLY NOW</button>
          </div>
          <div className={styles.dc2sub1box1}>
            <h4>Loans Against Securities</h4>
            <p>
              Got some securities that you can use as a guarantee? Simply pledge
              these securities in favour of DEMO Bank and get an overdraft
              facility equivalent to the value of the securities pledged. It’s
              that simple and quick.
              <br></br>
              <br></br>
              Click on the button below to get approved instantly*
            </p>
            <button>APPLY NOW</button>
          </div>
          <div className={styles.dc2sub1box1}>
            <h4>Commercial Business Loan</h4>
            <p>
              DEMO Bank Commercial Business Loans offer complete banking
              solutions for all your financial needs. With our commercial
              vehicle loans, construction equipment loans, working capital
              solutions and customised current accounts, we offer the perfect
              range of financing options for your commercial needs.
              <br></br>
              <br></br>
              Click on the button below to get approved instantly*
            </p>
            <button>APPLY NOW</button>
          </div>
          <div className={styles.dc2sub1box1}>
            <h4>Healthcare Equipment Loans</h4>
            <p>
              DEMO Bank Healthcare Equipment Loans are designed to provide
              flexible, convenient loans to certified Doctors, Hospitals,
              Medical Research & Educational institutes, Diagnostic Centres and
              Nursing Homes towards the purchase of Medical Equipment.
            </p>
            <button>APPLY NOW</button>
          </div>
          <div className={styles.dc2sub1box1}>
            <h4>Pradhan Mantri Mudra Yojana (PMMY)</h4>
            <p>
              Pradhan Mantri Mudra Yojana (PMMY) is a collateral-free loan up to
              ₹10 lakh, available for micro and small manufacturing and service
              units. Avail this scheme through DEMO Bank and give your business
              the boost it requires.
            </p>
            <button>KNOW MORE</button>
          </div>
          <div className={styles.dc2sub1box1}>
            <h4>Stand-Up India Scheme</h4>
            <p>
              The objective of the Stand-Up India scheme is to facilitate bank
              loans between ₹10 lakh and ₹1 crore to Scheduled Caste (SC) or
              Scheduled Tribe (ST) borrowers and to borrowers who are women, for
              the purpose of setting up a greenfield enterprise (a first-time
              venture), in the manufacturing, services, or trading sector.
            </p>
            <button>KNOW MORE</button>
          </div>
          <div
            className={styles.dc2sub1box1}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div>
              <img
                src={ic2}
                style={{
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "15px",
                }}
              />
            </div>
            <div>
              <h4>Recharge using iMobile</h4>
              <p></p>
              <button>KNOW MORE</button>
            </div>
          </div>
          <div
            className={styles.dc2sub1box1}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div>
              <img
                src={ic3}
                style={{
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "15px",
                }}
              />
            </div>
            <div>
              <h4>Recharge using Internet Banking</h4>
              <button>KNOW MORE</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
