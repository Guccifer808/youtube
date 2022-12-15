import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from './../store/hooks';
import { getHomepageVideos } from './../store/reducers/getHomepageVideos';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './../components/Spinner';
import Card from './../components/Card';
import { HomepageVideos } from '../Types';

export default function Home() {
  // Redux
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomepageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: 'auto', paddingBottom: '1px' }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: '96.5vh' }}>
        <Sidebar />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomepageVideos(true))}
            hasMore={videos.length < 300}
            loader={<Spinner />}
            height={650}
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
              {videos.map((item: HomepageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
