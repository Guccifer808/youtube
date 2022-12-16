import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from './../store/hooks';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './../components/Spinner';
import { HomepageVideos } from '../Types';
import { clearVideos } from '../store';
import { useNavigate } from 'react-router-dom';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import SearchCard from '../components/SearchCard';

export default function Search() {
  const navigate = useNavigate();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  // getHomepageVideos
  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === '') navigate('/');
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: 'auto', paddingBottom: '1px' }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: '92.5vh' }}>
        <Sidebar />
        {videos.length ? (
          <div className="py-8 pl-8 flex flex-col gap-5 w-full">
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 100} //was 300
              loader={<Spinner />}
              height={600}
            >
              {/* could use for mob <div className="flex gap-y-14 gap-x-8 flex-col p-8"> */}
              {/* or <div className="grid gap-y-14 gap-x-8 grid-cols-1 p-8"> */}
              {videos.map((item: HomepageVideos) => {
                return (
                  <div className="my-5">
                    <SearchCard data={item} key={item.videoId} />
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
