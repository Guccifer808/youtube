import { InitialState } from './../Types';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

//created initial state, TSX type
const initialState:InitialState = {
    videos: [],
    currentVideo: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: [],
};

// createSlice action via Redux Toolkit
const youtubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers:{},
    extraReducers: (builder => {}),
})

export const store = configureStore({
    reducer: {
        youtubeApp: youtubeSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch