import axios from "../Utils/axios";

function sendOTP(phoneNo) {
  let requestBody = {};
  requestBody.messageName = "EnterMobileNumber";
  requestBody.businessKey = `bk-${phoneNo}`;
  requestBody.resultEnabled = true;
  requestBody.all = true;
  requestBody.variablesInResultEnabled = true;
  requestBody.processVariables = {
    MobileNumber: {
      value: "" + phoneNo,
      type: "String",
    },
  };
  return new Promise(async (resolve, reject) => {
    let response = await axios.post("engine-rest/message", requestBody);

    if (response.data && response.data[0].variables.OTPGenerateStatus.value) {
      localStorage.setItem(
        "processInstanceId",
        response.data[0].processInstance.id
      );
      resolve(response.data[0].variables.GenerateOTP);
    } else {
      reject({ message: "Error" });
    }
  });
}
function validateOrResendOTP(OTP) {
  let requestBody = getRequestBody(OTP);
  return new Promise(async (resolve, reject) => {
    let response = await axios.post("engine-rest/message", requestBody);

    if (response.data && response.data.length > 0) {
      if (OTP && response.data[0].variables.OTPValidationStatus.value) {
        resolve(response.data[0].variables);
      } else if (!OTP && response.data[0].variables.OTPGenerateStatus.value) {
        resolve(response.data[0].variables.GenerateOTP);
      } else {
        reject({ message: "OTP doesn't match" });
      }
    } else {
      reject({ message: "Error" });
    }
  });
}
function getRequestBody(OTP) {
  let requestBody = {};
  requestBody.messageName = `EnterOrResendOTP`;
  requestBody.processInstanceId = localStorage.getItem("processInstanceId");
  requestBody.processVariables = {
    OTPRequestType: {
      value: OTP ? "validateotp" : "resendotp",
    },
  };
  if (OTP) {
    requestBody.processVariables.OTP = {
      value: "" + OTP,
    };
  }
  requestBody.resultEnabled = true;
  requestBody.variablesInResultEnabled = true;
  requestBody.all = true;

  return requestBody;
}
export { sendOTP, validateOrResendOTP };
