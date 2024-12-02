import React from "react";
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
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

function SideBar() {
  const mainlinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: "Explore",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: "Your Videos",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: "Liked Vidoes",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: "Music",
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: "Sport",
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: "Gaming",
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: "Films",
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: "Settings",
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: "Report History",
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: "Help",
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: "Send Feedback",
    },
  ];

  const testLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Policy",
      "How YouTube works",
      "Test new Features",
    ],
  ];

  return (
    <div className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
      <ul className="flex flex-col border-b-2 border-grey-700">
        {mainlinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`flex pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" ? "bg-zinc-600" : ""
              }`}
            >
              <a href="/" className="flex items-center gap-5 ">
                {icon}
              </a>
              <span className="text-sm tracking-wider">{name}</span>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-grey-700">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`flex pl-6 py-3 hover:bg-zinc-600`}>
              <a href="/" className="flex items-center gap-5 ">
                {icon}
              </a>
              <span className="text-sm tracking-wider">{name}</span>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-grey-700">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`flex pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" ? "bg-zinc-600" : ""
              }`}
            >
              <a href="/" className="flex items-center gap-5 ">
                {icon}
              </a>
              <span className="text-sm tracking-wider">{name}</span>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-grey-700">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`flex pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" ? "bg-zinc-600" : ""
              }`}
            >
              <a href="/" className="flex items-center gap-5 ">
                {icon}
              </a>
              <span className="text-sm tracking-wider">{name}</span>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {testLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {testLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400"> &copy; 2024 Google</span>
      <br />
      <p className="px-4 pt-3 text-sm text-zinc-400">
        {" "}
        This Clone is for Practising Only
      </p>
    </div>
  );
}

export default SideBar;
