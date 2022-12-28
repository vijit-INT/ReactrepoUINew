import { createSlice } from '@reduxjs/toolkit';

const Loader = createSlice({
    name: 'loader',
    initialState:{
        loader:false,
    },
    reducers:{
        loaderStart(values, action){
            values.loader = true;
           
        },
        loaderStop(values, action){
            values.loader = false;
           
        }
    }
})

export const LoaderAction = Loader.actions;

export default Loader;