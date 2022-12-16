import React from 'react';
import { Link } from 'react-router-dom';
import { HomepageVideos } from '../Types';

export default function SearchCard({ data }: { data: HomepageVideos }) {
  return (
    <div className="flex gap-3">
      <div className="relative">
        <span className="absolute bottom-1.5 right-1.5 text-xs bg-gray-900/90 rounded-[5px] px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-52 w-96 rounded-xl"
            alt="thumbnail"
          />
        </Link>
      </div>
    </div>
  );
}
