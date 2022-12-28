import axios from "../Utils/axios";

function savePersonalDetails(data) {
  let requestBody = {};
  requestBody.messageName = "EnterPersonalDetails";
  requestBody.processInstanceId = localStorage.getItem("processInstanceId");
  requestBody.resultEnabled = true;
  requestBody.variablesInResultEnabled = true;
  requestBody.all = true;
  requestBody.processVariables = {
    firstName: {
      value: "" + data.firstName,
      type: "String",
    },
    middleName: {
      value: "" + data.middleName,
      type: "String",
    },
    lastName: {
      value: "" + data.lastName,
      type: "String",
    },
    dob: {
      value: "" + data.dob,
      type: "String",
    },
    birthPlace: {
      value: "" + data.birthPlace,
      type: "String",
    },
    nationality: {
      value: "" + data.nationality,
      type: "String",
    },
    incomeProofType: {
      value: "" + data.incomeProofType,
      type: "String",
    },
    incomeProofNumber: {
      value: "" + data.incomeProofNumber,
      type: "String",
    },
    addressProofType: {
      value: "" + data.addressProofType,
      type: "String",
    },
    addressProofNumber: {
      value: "" + data.addressProofNumber,
      type: "String",
    },
    gender: {
      value: "" + data.gender,
      type: "String",
    },
  };
  return new Promise(async (resolve, reject) => {
    let response = await axios.post("engine-rest/message", requestBody);

    if (response.data && response.data.length > 0) {
      if (response.data[0].variables.SavePersonalDetailsStatus.value) {
        resolve(response.data[0].variables);
      } else {
        reject({ message: "Something went wrong. Please try again." });
      }
    } else {
      reject({ message: "Error" });
    }
  });
}

export { savePersonalDetails };
