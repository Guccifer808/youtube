import { InitialState } from './../Types';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getHomepageVideos } from './reducers/getHomepageVideos';
import { getSearchPageVideos } from './reducers/getSearchPageVideos';

//created initial state, TSX type
const initialState:InitialState = {
    videos: [],
    currentVideo: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: [],
};

// Reducers via Redux Toolkit
const youtubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers:{
        clearVideos: (state) => { //clearing videos Arr on change page
            state.videos = [];
            state.nextPageToken = null;
        },
        changeSearchTerm: (state, action:PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        clearSearchTerm: (state) => {
            state.searchTerm = "";
        }
    },
    extraReducers: (builder => {
        builder.addCase(getHomepageVideos.fulfilled, (state, action) =>{
            state.videos = action.payload.parsedData;
            state.nextPageToken = action.payload.nextPageToken;
        });
        builder.addCase(getSearchPageVideos.fulfilled, (state, action) =>{
            state.videos = action.payload.parsedData;
            state.nextPageToken = action.payload.nextPageToken;
        });
    }),
})

export const store = configureStore({
    reducer: {
        youtubeApp: youtubeSlice.reducer,
    },
})
export const { clearVideos, changeSearchTerm, clearSearchTerm } = youtubeSlice.actions;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch