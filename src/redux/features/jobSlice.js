import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../constant";

export const getJobs = createAsyncThunk("job/getJobs", async (credentials, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`/job/list`, credentials);
        // localStorage.setItem("token", response.data.data.token); // Store token
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "job fetch  failed");
    }
});
const jobSlice = createSlice({
    name: "job",
    initialState: {
        data: null,
        status: "idle", // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get all jobs
            .addCase(getJobs.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getJobs.fulfilled,(state,action)=>{
                state.status = "completed";
                state.data = action.payload;
                state.error = null;
            })
            .addCase(getJobs.rejected,(state,action)=>{
                state.status = "failed";
                state.error = action.payload;
            })
    }
})
export default jobSlice.reducer;