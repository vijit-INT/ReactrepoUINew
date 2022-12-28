import { createSlice } from '@reduxjs/toolkit';

const Doc = createSlice({
    name: 'register',
    initialState:{
        state1:false,
        state2:false,
        state3:false,
        otp:""
    },
    reducers:{
        updateState1(values, action){
            values.state1 = action.payload
           
        },
        updateState2(values, action){
            values.state2 = action.payload
           
        },
        updateState3(values, action){
            values.state3 = action.payload
           
        },
        updateOtp(values,action){
            values.otp = action.payload;
        }
    }
})

export const RDX = Doc.actions;

export default Doc;