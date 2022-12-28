import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../Utils/axios";
import { LoaderAction } from "./Loader";

export const getEmploymentDetails = createAsyncThunk(
  "employee/getEmploymentDetails",
  (arg, thunkAPI) => {
    const processInstanceId = localStorage.getItem("processInstanceId");
    console.log("API call made");
    thunkAPI.dispatch(LoaderAction.loaderStart());
    return axios
      .post(
        `${process.env.REACT_APP_CUSTOMER_API_URL}/employment/api/get/employment-details?processId=${processInstanceId}`
      )
      .then((response) => {
        thunkAPI.dispatch(LoaderAction.loaderStop());
        return response.data.body;
      })
      .catch((err) => {
        thunkAPI.dispatch(LoaderAction.loaderStop());
        console.log(err);
        return err;
      });
  }
);
export const getFinancialDetails = createAsyncThunk(
  "employee/getFinancialDetails",
  (arg, thunkAPI) => {
    const processInstanceId = localStorage.getItem("processInstanceId");
    console.log("API call made");
    thunkAPI.dispatch(LoaderAction.loaderStart());
    return axios
      .post(
        `${process.env.REACT_APP_CUSTOMER_API_URL}/get/financial-details?processId=${processInstanceId}`
      )
      .then((response) => {
        thunkAPI.dispatch(LoaderAction.loaderStop());
        return response.data.body;
      })
      .catch((err) => {
        thunkAPI.dispatch(LoaderAction.loaderStop());
        console.log(err);
        return err;
      });
  }
);

const employmentFinancialDetailsSlice = createSlice({
  name: "employment",
  initialState: {
    employmentDetails: {},
    financialDetails: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getEmploymentDetails.fulfilled, (state, action) => {
      state.employmentDetails = action.payload;
    });
    builder.addCase(getFinancialDetails.fulfilled, (state, action) => {
      state.financialDetails = action.payload;
    });
  },
});
export default employmentFinancialDetailsSlice;
