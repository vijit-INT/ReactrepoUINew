import React from "react";
import style from "./verticalStepper.module.css";

const steps = [
  {
    id: 1,
    imgSrc:
      "https://loans.icicibank.com/loans/home-loan/assets/Images/providedetails.png",
    name: "Validate User",
  },
  {
    id: 2,
    imgSrc:
      "https://loans.icicibank.com/loans/home-loan/assets/Images/navoffer.png",
    name: "Provide Details",
  },
  {
    id: 3,
    imgSrc:
      "https://loans.icicibank.com/loans/home-loan/assets/Images/navwallet.png",
    name: "Loan Agreement",
  },
  {
    id: 4,
    imgSrc:
      "https://loans.icicibank.com/loans/home-loan/assets/Images/sanction.png",
    name: "Set Password & Login",
  },
  {
    id: 5,
    imgSrc:
      "https://loans.icicibank.com/loans/home-loan/assets/Images/uploadDocuments.png",
    name: "Loan Availment & Summary",
  },
  {
    id: 6,
    imgSrc:
      "https://loans.icicibank.com/loans/home-loan/assets/Images/uploadDocuments.png",
    name: "Authentication",
  },
  {
    id: 7,
    imgSrc:
      "https://loans.icicibank.com/loans/home-loan/assets/Images/uploadDocuments.png",
    name: "Loan Disbursed",
  },
];
function VerticalStepper(props) {
  const stepCompleted = props.stepCompleted;
  return (
    <div>
      <div className={style.container}>
        {steps.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`${style.step} ${
                index + 1 <= stepCompleted ? style.completed : ""
              }`}
            >
              <div className={style.content}>
                <div>
                  <img src={item.imgSrc} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              </div>
              <div className={style.vstepper}>
                <div className={style.circle}></div>
                {index < steps.length - 1 && <div className={style.line}></div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VerticalStepper;
