import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '..';
import axios from 'axios';
import { YOUTUBE_API_URL } from './../../utils/consts';
import { parseData } from '../../utils';
import { HomepageVideos } from '../../Types';

const _APIkey = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

//thunk will grab Search page videos
export const getSearchPageVideos = createAsyncThunk("youtubeApp/SearchPageVideos", async (isNext:boolean, { getState }) => {
    const {
        youtubeApp: { nextPageToken: nextPageTokenFromState, videos, searchTerm },
    } = getState() as RootState;

    const { data: {items, nextPageToken}} = 
        await axios.get(
            `${YOUTUBE_API_URL}/search?maxResults=16&q="${searchTerm}"&key=${_APIkey}&part=snippet&type=video&${
              isNext ? `pageToken=${nextPageTokenFromState}` : ""
            }`
          );
        const parsedData: HomepageVideos[] = await parseData(items);
        return { parsedData: [...videos, ...parsedData], nextPageToken };
      }
    );