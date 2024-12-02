import axios from "axios";
import { YOUTUBE_API_URL } from "./Constants";
import { HomePageVideos } from "../Types";
import { convertRawViewsToString } from "./convertRowViewsToString";
import { timeSince } from "./TimeSince";
import { parseVideoDuration } from "./ParseVideoDuration";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;
export const parsedata = async (items: any[]) => {
  try {
    const videoIds: string[] = [];
    const channelIds: string[] = [];
    items.forEach(
      (item: { snippet: { channelId: string }; id: { videoId: string } }) => {
        channelIds.push(item.snippet.channelId);
        videoIds.push(item.id.videoId);
      }
    );
    const {
      data: { items: channelData },
    } = await axios.get(
      `${YOUTUBE_API_URL}/channels?part=snippet,contentDetails&id=${channelIds.join(
        ","
      )}&key=${API_KEY}`
    );
    const parsedChannelData: { id: string; image: string }[] = [];
    channelData.forEach(
      (channel: {
        id: string;
        snippet: {
          thumbnails: { default: { url: string } };
        };
      }) =>
        parsedChannelData.push({
          id: channel.id,
          image: channel.snippet.thumbnails.default.url,
        })
    );
    const {
      data: { items: videosData },
    } = await axios.get(
      `${YOUTUBE_API_URL}/videos?part=contentDetails,statistics&id=${videoIds.join(
        ","
      )}&key=${API_KEY}`
    );
    const parsedData: HomePageVideos[] = [];
    items.forEach(
      (
        item: {
          snippet: {
            channelId: string;
            title: string;
            description: string;
            thumbnails: { medium: { url: string } };
            publishedAt: Date;
            channelTitle: string;
          };
          id: {
            videoId: string;
          };
        },
        index: number
      ) => {
        const { image: channelImage } =
          parsedChannelData.find(
            (data) => data.id === item.snippet.channelId
          ) || {};
        if (channelImage)
          parsedData.push({
            videoId: item.id.videoId,
            videoTitle: item.snippet.title,
            videoDescription: item.snippet.description,
            videoThumbnail: item.snippet.thumbnails.medium.url,
            videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            videoDuration: parseVideoDuration(
              videosData[index].contentDetails.duration
            ),
            videoViews: convertRawViewsToString(
              videosData[index].statistics.viewCount
            ),
            videoAge: timeSince(new Date(item.snippet.publishedAt)),
            channelInfo: {
              id: item.snippet.channelId,
              image: channelImage,
              name: item.snippet.channelTitle,
            },
          });
      }
    );
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};
