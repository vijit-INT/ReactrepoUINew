import React from "react";
import styles from "./AddressProof.module.css";
import Sidebar from "../SideBar/Sidebar";
import img1 from "../../assets/img/Aadhar.png";
import img2 from "../../assets/img/dl.png";
import img3 from "../../assets/img/passport.png";
import img4 from "../../assets/img/NREGA.png";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

const AddressProof = () => {
  const navigate = useNavigate();
  const [userAddId, setUserAddId] = React.useState(null);
  return (
    <div>
      <Sidebar stepCompleted={1} />
      <div className={styles.subdiv2}>
        <div className={styles.sbd2div2}>
          <h2>Choose Address Proof</h2>
          <div className={styles.sd2mainDiv}>
            <label className={styles.inputDiv}>
              <input
                type="radio"
                className={styles.checkbox}
                value="userAddId"
                onChange={() => setUserAddId("1")}
                name="address"
              />
              <div style={{ width: "200px", height: "150px" }}>
                <img src={img1} style={{ width: "200px", height: "150px" }} />
              </div>
            </label>
            <label className={styles.inputDiv}>
              <input
                type="radio"
                className={styles.checkbox}
                value="userAddId"
                onChange={() => setUserAddId("2")}
                name="address"
              />
              <div
                style={{
                  width: "200px",
                  height: "150px",
                }}
              >
                <img
                  src={img2}
                  style={{
                    width: "200px",
                    height: "150px",
                  }}
                />
              </div>
            </label>
            <label className={styles.inputDiv}>
              <input
                type="radio"
                className={styles.checkbox}
                value="userAddId"
                onChange={() => setUserAddId("3")}
                name="address"
              />
              <div
                style={{
                  width: "150px",
                  height: "180px",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                <img src={img3} style={{ width: "150px", height: "180px" }} />
              </div>
            </label>
            <label className={styles.inputDiv}>
              <input
                type="radio"
                className={styles.checkbox}
                value="userAddId"
                onChange={() => setUserAddId("4")}
                name="address"
              />
              <div
                style={{ width: "150px", height: "180px", marginTop: "30px" }}
              >
                <img src={img4} style={{ width: "150px", height: "180px" }} />
              </div>
            </label>
          </div>
          <button
            onClick={() => navigate(`/addressproofscan/${userAddId}`)}
            disabled={userAddId === null}
          >
            Upload Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressProof;
