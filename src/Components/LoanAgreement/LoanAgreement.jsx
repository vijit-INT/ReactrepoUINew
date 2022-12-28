import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./LoanAgreement.module.css";
import SignatureCanvas from "react-signature-canvas";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { RDX } from "../../Redux/Document";
import { useDispatch } from "react-redux";

export const LoanAgreement = () => {
  const navigate = useNavigate();
  const sigPad = React.useRef(null);
  const [state, setState] = React.useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(RDX.updateState3(true));
    navigate("/welcome");
  };

  return (
    <div className={styles.mainDiv}>
      <Sidebar stepCompleted={3} />
      <div className={styles.subdiv2} style={{ paddingBottom: "50px" }}>
        <div className={styles.sbd2div2}>
          <h2>Loan Agreement</h2>
          <form className={styles.fromDiv}>
            <ol>
              <li>
                <p>
                  A Loan Agreement, also known as a term loan, demand loan, or a
                  loan contract, is a contract that documents<br></br> a
                  financial agreement between two parties, where one is the
                  lender and the other is the borrower.
                </p>
              </li>
              <li>
                <p>
                  This contract specifies the amount of the loan, any interest
                  charges, the repayment plan, and payment dates.<br></br>A
                  written contract gives both the borrower and lender a clear
                  outline of the terms of the loan.
                </p>
              </li>
              <li>
                <p>
                  If the borrower dies before paying off the loan, authorities
                  will use their assets to pay the remainder of the debt.
                  <br></br>
                  If there is a co-signer, the responsibility for the debt falls
                  to them.
                </p>
              </li>
              <li>
                <p>
                  The borrower may secure the loan with collateral such as a
                  vehicle, equipment, or jewellery.<br></br>
                  In this case, the lender may seize the collateral if the
                  borrower cannot repay the full loan amount.<br></br>
                  The lender may also require the borrower to obtain insurance
                  if using the loan to buy a vehicle.
                </p>
              </li>
              <li>
                <p>
                  The borrower repays the entire loan amount at once (either by
                  a specific date or upon notice to repay).
                </p>
              </li>
            </ol>
          </form>
          <SignatureCanvas
            penColor="green"
            ref={sigPad}
            canvasProps={{
              width: 500,
              height: 150,
              className: "sigCanvas",
              style: {
                border: "1px solid black",
                backgroundColor: "white",
                borderRadius: "10px",
                display: "block",
                marginBottom: "30px",
              },
            }}
          />
          <button
            onClick={() => {
              setState((prev) => !prev);
            }}
          >
            &#10004;
          </button>
          <button
            disabled={state}
            onClick={() => {
              sigPad.current.clear();
            }}
          >
            &#x2716;
          </button>
          {state && (
            <button
              style={{ display: "block", marginTop: "30px" }}
              onClick={handleSubmit}
            >
              Agree & Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
