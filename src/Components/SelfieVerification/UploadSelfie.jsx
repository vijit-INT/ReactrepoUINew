import React,{useState} from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./UploadSelfie.module.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img/selfie.png";
import { Modal } from "react-responsive-modal";

const UploadSelfie = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <Sidebar stepCompleted={1} />
      <div className={styles.subdiv2}>
        <div className={styles.sbd2div2}>
          <h1>Now it’s time for a selfie</h1>
          <br />
          <img src={img1} />
          <br></br>
          <div className={styles.fromDiv}>
            
          </div>
          <br></br>
          <label className={styles.label}>
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => setCheck(!check)}
              />
              By checking this box, I agree to receive promotional<br></br> and marketing
              content from DEMO Bank <br></br>
              <a onClick={onOpenModal}>view details</a>
            </label>
          
            <br />
            <br />
            <br />
            <br />
            
          <button
            onClick={() => navigate("/takeselfie")}
            style={{ marginLeft: "-10px" }}
            disabled={!check}
          >
            Capture Now
          </button>
        </div>
        <Modal open={open} onClose={onCloseModal}>
            <h2 style={{ color: "#053c6d" }}>General terms & conditions</h2>
            <ol>
              <li>
                <p>
                  A Loan Agreement, also known as a term loan, demand loan, or a
                  loan contract, is a contract that documents a financial
                  agreement between two parties, where one is the lender and the
                  other is the borrower.
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
          </Modal>
      </div>
    </div>
  );
};

export default UploadSelfie;
