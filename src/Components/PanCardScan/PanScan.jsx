import React from "react";
import styles from "./PanScan.module.css";
import Sidebar from "../SideBar/Sidebar";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { Navbar } from "../Navbar/Navbar";
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

 const PanScan = () => {
   const navigate = useNavigate();
   const [picture, setPicture] = React.useState(null);
//   const webcamRef = React.useRef(null);
//   const capture = React.useCallback(() => {
//     const pictureSrc = webcamRef.current.getScreenshot();
//     console.log(pictureSrc);
//     setPicture(pictureSrc);
//   });
const handleChange = (e) => {
   setPicture(e.target.value)
   console.log(e)
}

  return (
    <div>
      <Sidebar stepCompleted={1} />
      <div className={styles.subdiv2}>
        <div className={styles.sbd2div2}>
          <div>
            <h2>Capture Pan Card:</h2>
            {/* <Webcam
              audio={false}
              height={300}
              ref={webcamRef}
              width={300}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            /> */}
               <input type='file'onChange={(e)=> handleChange(e)}/>
            <br></br>
            {/* <button onClick={capture}>Capture</button> */}
          </div>
          {picture && (
            <div>
              <h2>Captured Pan Card:</h2>
              <img src="C:\\fakepath\\akash_da.webp"
 alt="captured-img" />
              <br></br>
              <button onClick={() => navigate("/addressproof")}>
              Confirm & Continue
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PanScan;
