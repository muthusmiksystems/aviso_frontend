import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../constant";

export const getSearch = createAsyncThunk("search/getSearch", async (searchData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/utils/search?search=${searchData}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Registration failed");
    }
  });