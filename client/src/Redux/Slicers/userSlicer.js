import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { users } from "../../Utils/seed";

const initialState = {
  users : [...users],
};

// export const getUserById = createAsyncThunk(
//   "user/getUserById",
//   async (id) => {
//     const res = await axios.get(`http://localhost:3001/`);
//     const data = res.json();
//     return data;
//   }
// );


export const getUsers= createAsyncThunk("user/getUsers", async () => {
  const res = await axios.get(`http://localhost:3001/users`);
  return res.data;
});

export const postUser = createAsyncThunk(
  "user/postUser",
  async (info) => {
    const res = await axios.post("http://localhost:3001/user", info);
    return res.data;
  }
);

const usersSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {  },
  extraReducers(builder) {
    builder
      .addCase(postUser.fulfilled, (state) => {
        state.postStatus = "Succeeded";
      })
    //   .addCase(getUserById.fulfilled, (state, action) => {
    //     state.projectId = action.payload;
    //   })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = [...action.payload]
      })
  },
});

export default usersSlicer.reducer;
