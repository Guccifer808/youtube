import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from './../store/hooks';
import { getHomepageVideos } from './../store/reducers/getHomepageVideos';

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
      </div>
    </div>
  );
}
