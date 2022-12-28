import React, { useContext } from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./Documentation.module.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";


const Documentation = () => {
  const navigate = useNavigate();
  const state1 = useSelector((state) => state.dState.state1);
  const state2 = useSelector((state) => state.dState.state2);
  const state3 = useSelector((state) => state.dState.state3);

  return (
    <div className={styles.mainDiv}>
      <Sidebar stepCompleted={1} />
      <div className={styles.subdiv2}>
        <div className={styles.sbd2div2}>
          <h2>Let us get to know you more by completing the next steps:</h2>
          <div className={styles.sd2mainDiv}>
            <div
              className={styles.smdSubDiv}
              onClick={() => {
                !state1 && navigate("/panverify");
              }}
            >
              <span>
                <h1>1</h1>
              </span>
              <h2>Upload your ID</h2>
              <div className={styles.icons}>
                <div>
                  {state1 ? (
                    <CheckCircleSharpIcon className={styles.icon} />
                  ) : (
                    <ArrowCircleRightSharpIcon className={styles.icon} />
                  )}
                </div>
              </div>
            </div>
            <div
              className={styles.smdSubDiv}
              onClick={() => {
                state1 && !state2 && navigate("/uploadselfie");
              }}
            >
              <span>
                <h1>2</h1>
              </span>
              <h2>Take your selfie</h2>
              <div className={styles.icons}>
                <div>
                  {state1 && state2 ? (
                    <CheckCircleSharpIcon className={styles.icon} />
                  ) : state1 ? (
                    <ArrowCircleRightSharpIcon className={styles.icon} />
                  ) : null}
                </div>
              </div>
            </div>
            <div
              className={styles.smdSubDiv}
              onClick={() => {
                state1 && state2 && !state3 && navigate("/basicDetails");
              }}
            >
              <span>
                <h1>3</h1>
              </span>
              <h2>Fillout details</h2>
              <div className={styles.icons}>
                <div>
                  {state1 && state2 && state3 ? (
                    <CheckCircleSharpIcon className={styles.icon} />
                  ) : state1 && state2 ? (
                    <ArrowCircleRightSharpIcon className={styles.icon} />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
