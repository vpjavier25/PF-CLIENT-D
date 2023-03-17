import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    AllProjects:{},
    postStatus: '',
    error: null
};

export const postProject = createAsyncThunk('project/postProject', async (info) => {
    
        const res = await axios.post("http://localhost:3001/projects", info);
        const data = res.json();
        return data;
    
})

export const projectsSlicer = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(postProject.fulfilled, (state)=>{
                state.postStatus = 'Succeeded';
            })
    }
})



export default projectsSlicer.reducer;