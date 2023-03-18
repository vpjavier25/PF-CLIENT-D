import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { project } from "../../Utils/seed";

const initialState = {
  AllProjects: [...project],
  postStatus: "",
  error: null,
  projectId: {},
  projectByName: [],
  ProjectsToDisplay: [...project],
  projectsFiltred: [],
  filterLocation: [],
  filterState: [],
};

export const getProjectById = createAsyncThunk(
  "project/getProjectById",
  async (id) => {
    const res = await axios.get(`http://localhost:3001/projects/${id}`);
    return res.data;
  }
);

export const getProjectByName = createAsyncThunk(
  "project/getProjectByName",
  async (name) => {
    const res = await axios.get(`http://localhost:3001/projects?name=${name}`);
    return res.data;
  }
);

export const getProject = createAsyncThunk("project/getProject", async () => {
  const res = await axios.get(`http://localhost:3001/projects`);
  return res.data;
});

export const postProject = createAsyncThunk(
  "project/postProject",
  async (info) => {
    const res = await axios.post("http://localhost:3001/projects", info);
    return res.data;
  }
);

const projectsSlicer = createSlice({
  name: "project",
  initialState,
  reducers: {

    ///////////logica filtros////////////
    filter(state, action) {
      if (!state.filterLocation.length && !state.filterState.length) {
        state.ProjectsToDisplay = [...state.AllProjects];
        state.projectsFiltred = [...state.AllProjects];
      } else {
        let toFilter = [...state.AllProjects];

        if (state.filterState.length) {
          const filters = [...state.filterState];
          toFilter = toFilter.filter((project) =>
            filters.some((state) => project.completed === state)
          );
        }

        if (state.filterLocation.length) {
          const filters = [...state.filterLocation];
          toFilter = toFilter.filter((project) =>
            filters.some((location) => project.location === location)
          );
        }
        state.ProjectsToDisplay = [...toFilter];
        state.projectsFiltred = [...toFilter];
      }
    },

    addFilterLocation(state, action) {
      state.filterLocation = [...action.payload];
    },

    addFilterState(state, action) {
      state.filterState = [...action.payload];
    },

    //logica ordenamiento
    orderByAlpha(state, action) {
      if (!state.ProjectsToDisplay.length) return;
      else if (action.payload === "none")
        state.ProjectsToDisplay = [...state.projectsFiltred];
      else {
        if (action.payload === "asc" || action.payload === "desc") {
          const toFilter = [...state.projectsFiltred];
          let sorted =
            action.payload === "asc"
              ? toFilter.sort((a, b) => {
                  if (a.name > b.name) return 1;
                  if (a.name < b.name) return -1;
                  return 0;
                })
              : toFilter.sort((a, b) => {
                  if (a.name > b.name) return -1;
                  if (a.name < b.name) return 1;
                  return 0;
                });
          state.ProjectsToDisplay = [...sorted];
        } else {
          const toFilter = [...state.projectsFiltred];
          let sorted =
            action.payload === "-"
              ? toFilter.sort((a, b) => {
                  if (a.cost > b.cost) return 1;
                  if (a.cost < b.cost) return -1;
                  return 0;
                })
              : toFilter.sort((a, b) => {
                  if (a.cost > b.cost) return -1;
                  if (a.cost < b.cost) return 1;
                  return 0;
                });
          state.ProjectsToDisplay = [...sorted];
        }
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(postProject.fulfilled, (state) => {
        state.postStatus = "Succeeded";
      })
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.projectId = action.payload;
      })
      .addCase(getProject.fulfilled, (state, action) => {
        state.AllProjects = [...action.payload];
        state.ProjectsToDisplay = [...action.payload];
        state.projectsFiltred = [...action.payload];
      })
      .addCase(getProjectByName.fulfilled, (state, action) => {
        state.projectByName = action.payload;
      });
  },
});
export const { filter, addFilterLocation, addFilterState, orderByAlpha } =
  projectsSlicer.actions;
export default projectsSlicer.reducer;
