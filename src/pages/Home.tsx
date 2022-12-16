import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from './../store/hooks';
import { getHomepageVideos } from './../store/reducers/getHomepageVideos';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './../components/Spinner';
import Card from './../components/Card';
import { HomepageVideos } from '../Types';
import { clearVideos } from '../store';

export default function Home() {
  // Redux
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  //clearVideos
  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);
  // getHomepageVideos
  useEffect(() => {
    dispatch(getHomepageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: 'auto', paddingBottom: '1px' }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: '92.5vh' }}>
        <Sidebar />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomepageVideos(true))}
            hasMore={videos.length < 100} //was 300
            loader={<Spinner />}
            height={650}
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8 ">
              {/* could use for mob <div className="flex gap-y-14 gap-x-8 flex-col p-8"> */}
              {/* or <div className="grid gap-y-14 gap-x-8 grid-cols-1 p-8"> */}
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
