import {  createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from "js-cookie";


const initialState = {
    status: false
}

export const userLogIn = createAsyncThunk(
    "LogIn/getUserLogIn",
    async () => {
      const res = await axios.get(`http://localhost:3001/login`);
      return res.data;
    }
  );

const LogInSlicer = createSlice({
    name: "LogIn",
    initialState,
    reducers:{
        verifyStatus(state, action){
            const LogInStatus = Cookie.get("success");
            if (LogInStatus){
                state.status = true;
            }else{
                state.status = false;
            }
        }
    }
})

export const {verifyStatus} = LogInSlicer.actions;

export default LogInSlicer.reducer;