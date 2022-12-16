import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { TiMicrophone } from 'react-icons/ti';
import { BsYoutube, BsCameraVideo, BsBell } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoAppsSharp } from 'react-icons/io5';
import { changeSearchTerm, clearSearchTerm, clearVideos } from '../store';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';

export default function Navbar() {
  // for search
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const handleSearch = () => {
    if (location.pathname !== '/search') navigate('/search');
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };
  return (
    <div className="flex justify-between items-center px-6 h-14 bg-[#151515] opacity-95 sticky top-0 z-50 navbar">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu className="text-slate-300" />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-sm text-white logo">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex bg-zinc-900 h-10 px-4 pr-0 rounded-full">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />
              <AiOutlineClose
                className={`text-xl cursor-pointer ${
                  !searchTerm ? 'invisible' : 'visible'
                }`}
                onClick={() => dispatch(clearSearchTerm())}
              />
            </div>
            <button className="flex items-center justify-center bg-zinc-800 h-10 w-16 rounded-r-full">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="p-3 bg-zinc-900 rounded-full text-xl">
          <TiMicrophone />
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">
        <BsCameraVideo />
        <IoAppsSharp />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img
          src="https://yt3.googleusercontent.com/ytc/AMLnZu80d66aj0mK3KEyMfpdGFyrVWdV5tfezE17IwRkhw=s88-c-k-c0x00ffffff-no-rj"
          alt="logo"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
}
