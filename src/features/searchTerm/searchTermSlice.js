import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client, endpoint } from "../../api/client";

export const fetchWeatherData = createAsyncThunk('city/fetchWeatherData', async () =>{
    const response = await client.get(endpoint);
    return response;
}  )

const initialState = {
    weatherData:{},
    status:'idle',
    error:null
}

const searchTermSlice = createSlice({
    name:'city',
    initialState,
    extraReducers(builder){
        builder
        .addCase(fetchWeatherData.pending, (state, action) =>{
            state.status = 'loading';
        })
        .addCase(fetchWeatherData.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.weatherData = action.payload;
        })
        .addCase(fetchWeatherData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
    }

})

export default searchTermSlice.reducer