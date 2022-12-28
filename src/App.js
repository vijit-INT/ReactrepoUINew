import Dashboard from "./Components/Dashboard/Dashboard";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import BasicDetails from "./Components/UserDetails/BasicDetails";
import UserVerification from "./Components/MobileNumber&OtpVerification/UserVerification";
import TermsCondition from "./Components/Terms&Condition/Terms&condition";
import Documentation from "./Components/Documentation/Documentation";
import { EmploymentFinancialDetails } from "./Components/EmploymentFinancialDetails/EmploymentFinancialDetails";
import { LoanDetails } from "./Components/LoanDetails/LoanDetails";
import PanVerify from "./Components/PanCardVerification/PanVerify";
import PanScan from "./Components/PanCardScan/PanScan";
import AddressProof from "./Components/AddressVerification/AddressProof";
import { LoanAgreement } from "./Components/LoanAgreement/LoanAgreement";
import AddressProofScan from "./Components/AddressVerification/AddressProofScan";
import UploadSelfie from "./Components/SelfieVerification/UploadSelfie";
import TakeSelfie from "./Components/SelfieVerification/TakeSelfie";
import OtpVerification from "./Components/MobileNumber&OtpVerification/OtpVerification";
import { Welcome } from "./Components/Welcome/Welcome";
import { SetPassword } from "./Components/SetPassword/SetPassword";
import { Login } from "./Components/Login/Login";
import { LoanAvailment } from "./Components/LoanAvailment/LoanAvailment";
import { LoanSummary } from "./Components/LoanSummary/LoanSummary";
import { Congratulations } from "./Components/Congratulations/Congratulations";
import { ContactDetails } from "./Components/UserDetails/ContactDetails";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import OtpValidation from "./Components/ForgotPassword/OtpValidation";
import Authentication from "./Components/Authentication/Authentication";
import ExistingCustomer from "./Components/ExistingCutomer/ExistingCustomer";
import Lottie from 'react-lottie';
import animationData from './assets/img/98195-loader.json';
import { useSelector } from "react-redux";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
function App() {
  const loader = useSelector((state) => state.load.loader)
  return (
    <div className="App">
      {loader ?
        <div style={{
          background: '#6E6C6C',
          opacity: '0.95',
          width: '100%',
          height: '100%',
          position: 'fixed',
          left: '0', top: '0',
          zIndex: '1000'
        }}>

          <div style={{
            textAlign: 'center',
            left: "50%",
            top: "50%",
            alignItems: "center",
            justifyContent: "center",
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
          }}>
            <Lottie options={defaultOptions}
              height={300}
              width={300}
            />
          </div>
        </div> : null}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/userverification" element={<UserVerification />} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/basicDetails" element={<BasicDetails />} />
        <Route path="/contactDetails" element={<ContactDetails />} />
        <Route path="/terms&condition" element={<TermsCondition />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route
          path="/employmentFinancialDetails"
          element={<EmploymentFinancialDetails />}
        />
        <Route path="/loanDetails" element={<LoanDetails />} />
        <Route path="/loanAgreement" element={<LoanAgreement />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/setPassword" element={<SetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panverify" element={<PanVerify />} />
        <Route path="/panscan" element={<PanScan />} />
        <Route path="/addressproof" element={<AddressProof />} />
        <Route path="/addressproofscan/:addId" element={<AddressProofScan />} />
        <Route path="/uploadselfie" element={<UploadSelfie />} />
        <Route path="/takeselfie" element={<TakeSelfie />} />

        <Route path="/loanAvailment" element={<LoanAvailment />} />
        <Route path="/loanSummary" element={<LoanSummary />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/congratulations" element={<Congratulations />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/otpValidation" element={<OtpValidation />} />
        <Route path="/existingCustomer" element={<ExistingCustomer />} />
      </Routes>
    </div>
  );
}

export default App;
