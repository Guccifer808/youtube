import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '..';
import axios from 'axios';
import { YOUTUBE_API_URL } from './../../utils/consts';
import { parseData } from '../../utils';
import { HomepageVideos } from '../../Types';

const _APIkey = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

//thunk will grab homepage videos
export const getHomepageVideos = createAsyncThunk("youtubeApp/homepageVideos", async (isNext: boolean, { getState }) => {
    const {
        youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as RootState;

    const { data: {items, nextPageToken},} = 
        await axios.get(
            `${YOUTUBE_API_URL}/search?maxResults=16&q="petrolicious"&key=${_APIkey}&part=snippet&type=video&${ //CHANGED TO 2 SAVE API REQS
              isNext ? `pageToken=${nextPageTokenFromState}` : ""
            }`
          );
        // (`${YOUTUBE_API_URL}/search?maxResults=20&q="Nurburgring time attack records"&key=${_APIkey}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}` :""}`)
        const parsedData: HomepageVideos[] = await parseData(items);
        return { parsedData: [...videos, ...parsedData], nextPageToken };
      }
    );

    // export const getHomePageVideos = createAsyncThunk(
    //   "youtubeApp/homePageVidoes",
    //   async (isNext: boolean, { getState }) => {
    //     const {
    //       youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    //     } = getState() as RootState;
    //     const {          data: { items, nextPageToken },        } = await axios.get(
    //       `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
    //         isNext ? `pageToken=${nextPageTokenFromState}` : ""
    //       }`
    //     );
    //     console.log({ items, nextPageTokenFromState, nextPageToken });
    //     const parsedData: HomePageVideos[] = await parseData(items);
    //     return { parsedData: [...videos, ...parsedData], nextPageToken };
    //   }
    // );
    