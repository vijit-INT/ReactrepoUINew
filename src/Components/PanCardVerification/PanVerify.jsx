import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./PanVerify.module.css";
import img1 from "../../assets/img/panCard.png";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

const PanVerify = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = React.useState(null);
  const [picture, setPicture] = React.useState(null);
  console.log(userId);

  const handleChange = (e) => {
    setPicture(e.target.value)
    console.log(e)
 }
  return (
    <>
      <div>
        <Sidebar stepCompleted={1} />
        <div className={styles.subdiv2}>
          <div className={styles.sbd2div2}>
            <h1>Upload Your Pan card</h1>

            <label className={styles.img1}>
              <input
                type="radio"
                // className={styles.checkbox}
                value="userId"
                onChange={() => setUserId("pan")}
              />
              <div>
                <img src={img1} className={styles.img1} />
              </div>
            </label>

            <br />
            <input type='file'onChange={(e)=> handleChange(e)}/>
            { picture &&            
            <button disabled={!picture} onClick={() => navigate("/addressproof")}>Confirm and Continue</button> 
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default PanVerify;
