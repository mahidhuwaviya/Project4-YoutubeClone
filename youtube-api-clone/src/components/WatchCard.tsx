import React from "react";
import { Link } from "react-router-dom";
import { RecommendedVideos } from "../Types";

interface WatchCardPropsInderFace {
  data: RecommendedVideos;
}
const WatchCard: React.FC<WatchCardPropsInderFace> = ({ data }) => {
  return (
    <div className="flex gap-3 ">
      <div className="relative min-w-fit">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="ThumbNail"
            className="h-24 w-40 "
          ></img>
        </Link>
      </div>
      <div className="flex gap-1 flex-col ">
        <h4 className="text-sm ">
          <a href="" className="line-clamp-2">
            {data.videoTitle}
          </a>
        </h4>
        <div className="text-sm text-grey-400">
          <div className="">
            <a href="/" className="hover:text-white">
              {data.channelInfo.name}
            </a>
          </div>
          <span className="after:content-['•'] after:mx-1">
            {data.videoViews}views
          </span>
          <span>{data.videoAge}</span>
        </div>
      </div>
    </div>
  );
};

export default WatchCard;
