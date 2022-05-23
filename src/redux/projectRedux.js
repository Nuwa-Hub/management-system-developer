import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProjectStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProjectSuccess: (state, action) => {
      state.isFetching = false;
      state.projects = action.payload;
    },
    getProjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProjectStart,
  getProjectSuccess,
  getProjectFailure,
  
} = projectSlice.actions;

export default projectSlice.reducer;
