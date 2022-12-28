import React from "react";
import styles from "../PanCardScan/PanScan.module.css";
import Sidebar from "../SideBar/Sidebar";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { Navbar } from "../Navbar/Navbar";
import { RDX } from "../../Redux/Document";
import { useDispatch } from "react-redux";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};
const TakeSelfie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [picture, setPicture] = React.useState(null);
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    console.log(pictureSrc);
    setPicture(pictureSrc);
  });

  const handleSubmit = () => {
    dispatch(RDX.updateState2(true));
    navigate("/documentation");
  };

  return (
    <div>
      <Sidebar stepCompleted={1} />
      <div className={styles.subdiv2}>
        <div className={styles.sbd2div2}>
          <div>
            <h2>Take a selfie:</h2>
            <Webcam
              audio={false}
              height={300}
              ref={webcamRef}
              width={300}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
            <br></br>
            <button onClick={capture}>Capture</button>
          </div>
          <div>
            {picture && (
              <div>
                <h2>Selfie:</h2>
                <img src={picture} alt="captured-img" />
                <br></br>
                <button
                  onClick={handleSubmit}
                >
                  Confirm & Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeSelfie;
