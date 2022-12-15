import { createAsyncThunk } from '@reduxjs/toolkit'

const _APIkey = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomepageVideos = createAsyncThunk("youtubeApp/homepageVideos", async (isNext:boolean, { getState }) => {

});