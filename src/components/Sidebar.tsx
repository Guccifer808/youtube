import React from 'react';
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from 'react-icons/md';
import { TbMusic, TbDeviceGamepad2 } from 'react-icons/tb';
import { FaRegCompass } from 'react-icons/fa';
import { GiFilmStrip } from 'react-icons/gi';

export default function Sidebar() {
  // Links array
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: 'Home',
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: 'Explore',
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: 'Shorts',
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: 'Subscriptions',
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: 'Library',
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: 'History',
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: 'Your Videos',
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: 'Watch Later',
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: 'Liked Videos',
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: 'Music',
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: 'Sport',
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: 'Gaming',
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: 'Films',
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: 'Settings',
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: 'Report history',
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: 'Help',
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: 'Send feedback',
    },
  ];

  const textLinks = [
    [
      'About',
      'Press',
      'Copyright',
      'Contact us',
      'Creator',
      'Advertise',
      'Developers',
    ],
    [
      'Terms',
      'Privacy',
      'Policy & Safety',
      'How YouTube works',
      'Test new features',
    ],
  ];

  return (
    <div className="w-[14.5rem] bg-[#151515] pr-5 overflow-auto pb-8 sidebar">
      {/* Main links */}
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 rounded-full hover:bg-zinc-600 ${
                name === 'Home' ? 'bg-slate-700' : ''
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      {/* Secondary links */}
      <ul className="flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className="pl-6 py-3 hover:bg-zinc-600 ">
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      {/* Subscription links */}
      <ul className="flex flex-col border-b-2 border-gray-700 ">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li key={name} className="pl-6 py-3 hover:bg-zinc-600 ">
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      {/* Help links */}
      <ul className="flex flex-col border-b-2 border-gray-700">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li key={name} className="pl-6 py-3 hover:bg-zinc-600 ">
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      {/* Legal links */}
      <ul className="flex gap-2 flex-wrap text-[0.75rem] text-zinc-400 p-4">
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      {/* Legal links 2 */}
      <ul className="flex gap-2 flex-wrap text-[0.75rem] text-zinc-400 p-4">
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy; 2022 Google LLC</span>
      <br />
      <p className="px-4 pt-3 text-sm text-red-600">
        Made for educational purposes only.
      </p>
    </div>
  );
}
