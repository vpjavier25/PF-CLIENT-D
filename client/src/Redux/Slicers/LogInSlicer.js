import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from "js-cookie";


const initialState = {
    status: false
}

export const userLogIn = createAsyncThunk(
    "LogIn/postUserLogIn",
    async (data) => {
        try {
            const verify = await axios.post(`http://localhost:3001/login`, data);
            console.log(verify.data)
            return verify.data;
        } catch (error) {
            console.log(error)
        }
    });


const logInSlicer = createSlice({
    name: "logIn",
    initialState,
    reducers: {
        verifyStatus(state, action) {
            const LogInStatus = Cookie.get("value");
            if (LogInStatus) {
                state.status = true;
            } else {
                state.status = false;
            }
            
        },

    },
    extraReducers(builder) {
        builder
            .addCase(userLogIn.fulfilled, (state, action) => {
                if (action.payload.success === true ){
                    state.status = true;
                    window.location.href ="http://localhost:3001/login"
                }else {
                    state.status = false
                }
               

            })
    }


})

export const { verifyStatus } = logInSlicer.actions;

export default logInSlicer.reducer;