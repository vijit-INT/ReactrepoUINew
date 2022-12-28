import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../Utils/axios";
import { LoaderAction } from "./Loader";

export const getPersonalDetails = createAsyncThunk(
  "customer/getPersonalDetails",
  (arg, thunkAPI) => {
    const processInstanceId = localStorage.getItem("processInstanceId");
    console.log("API call made");
    thunkAPI.dispatch(LoaderAction.loaderStart());
    return axios
      .post(
        `${process.env.REACT_APP_CUSTOMER_API_URL}/get/personal-details?processId=${processInstanceId}`
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
export const getContactDetails = createAsyncThunk(
  "customer/getContactDetails",
  (arg, thunkAPI) => {
    const processInstanceId = localStorage.getItem("processInstanceId");
    console.log("API call made");
    thunkAPI.dispatch(LoaderAction.loaderStart());
    return axios
      .post(
        `${process.env.REACT_APP_CUSTOMER_API_URL}/get/contact-details?processId=${processInstanceId}`
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
export const getAddressDetails = createAsyncThunk(
  "customer/getAddressDetails",
  (arg, thunkAPI) => {
    const processInstanceId = localStorage.getItem("processInstanceId");
    console.log("API call made");
    thunkAPI.dispatch(LoaderAction.loaderStart());
    return axios
      .post(
        `${process.env.REACT_APP_CUSTOMER_API_URL}/get/address-details?processId=${processInstanceId}`
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

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    personalDetails: {},
    contactDetails: {},
    addressDetails: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getPersonalDetails.fulfilled, (state, action) => {
      state.personalDetails = action.payload;
    });
    builder.addCase(getContactDetails.fulfilled, (state, action) => {
      state.contactDetails = action.payload;
    });
    builder.addCase(getAddressDetails.fulfilled, (state, action) => {
      state.addressDetails = action.payload;
    });
  },
});
export default customerSlice;
