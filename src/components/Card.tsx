import React from 'react';
import { Link } from 'react-router-dom';
import { HomepageVideos } from '../Types';

export default function Card({ data }: { data: HomepageVideos }) {
  return (
    <div className="w-64 h-60 flex gap-3 flex-col">
      <div className="relative">
        <span className="absolute bottom-3 right-3 bg-gray-900 text-sm px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-44 w-72"
            alt="thumbnail"
          />
        </Link>
      </div>
    </div>
  );
}
