import { InitialState } from './../Types';


const initialState:InitialState = {
    videos: [],
    currentVideo: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: [],
};

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