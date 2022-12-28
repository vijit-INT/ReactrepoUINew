import React from "react";
import Sidebar from "../SideBar/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../PanCardScan/PanScan.module.css";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import { RDX } from "../../Redux/Document";
import img1 from "../../assets/img/Aadhar.png";
import img2 from "../../assets/img/dl.png";
import img3 from "../../assets/img/passport.png";
import img4 from "../../assets/img/NREGA.png";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

const AddressProofScan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [picture, setPicture] = React.useState(null);
  // const webcamRef = React.useRef(null);
  // const capture = React.useCallback(() => {
  //   const pictureSrc = webcamRef.current.getScreenshot();
  //   console.log(pictureSrc);
  //   setPicture(pictureSrc);
  // });

  const { addId } = useParams();
  console.log(typeof addId);
  let str = "";
  let img = "";
  if (addId === "1") {
    str = "Aadhar Card";
    img = img1;
  } else if (addId === "2") {
    str = "Driving Licence";
    img = img2;
  } else if (addId === "3") {
    str = "Passport";
    img = img3;
  } else if (addId === "4") {
    str = "NREGA";
    img = img4;
  }

  const handleSubmit = () => {
    dispatch(RDX.updateState1(true));
    navigate("/documentation");
  };


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
            <h2>Upload {str}</h2>
            <img src={img} alt="img" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
            <input type='file' onChange={(e) => handleChange(e)} className={styles.input}/>
          
            
            {picture &&
              <button disabled={!picture} onClick={handleSubmit}>Confirm and continue</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressProofScan;
