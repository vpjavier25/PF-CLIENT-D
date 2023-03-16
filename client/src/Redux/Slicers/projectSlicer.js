import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllProjects:{},
    status: '',
    error: null
};

export const getAllProjects = createAsyncThunk('project/getProjects', async () => {
    
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = res.json();
        return data;
    
})

export const projectsSlicer = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllProjects.pending, (state, action)=>{
                state.status = 'Loading';
            })

            .addCase(getAllProjects.fulfilled, (state, action)=>{
                let data = action.payload;
                state.status = 'Succeeded';
                state.AllProjects = data;
            })

            .addCase(getAllProjects.rejected,  (state, action)=>{
                state.status = 'rejected';
                state.status = action.error.message;
            })
    }
})



export default projectsSlicer.reducer;