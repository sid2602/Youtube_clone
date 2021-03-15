import { useContext, createContext, useState, useEffect } from "react";
import { YTResponseTypes, defaultYTResponse } from "../Types/YoutubeResponse";
import { defaultVideoResponse, SpecificVideo } from "../Types/VideoResponse";
import {
  defaultAuthorResponse,
  AuthorResponse,
} from "../Types/VideoAuthorResponse";
import {
  defaultCommentsResponse,
  VideoCommentsResponse,
} from "../Types/VideoCommentsResponse";

import axios from "axios";
import defRes from "./defRes.json";
import defSearchRes from "./defSearchRes.json";
import defResVideo from "./defResVideo.json";
import defResChannel from "./defResChannel.json";
import defResComments from "./defResComments.json";

type VideoContextType = {
  videos: YTResponseTypes;
  foundedMovies: YTResponseTypes;
  searchVideo: (title: string, search_query: string) => {};
  getMoreVideos: (
    title: string,
    pageToken: string,
    videosType: YTResponseTypes
  ) => {};
  specificVideo: SpecificVideo;
  getSpecificVideo: (videoId: string) => {};
  channel: AuthorResponse;
  getChanelDetails: (channelId: string) => {};
  lastSearchQuery: string;
  comments: VideoCommentsResponse;
  getVideoComments: (videoId: string) => {};
  commentsError: string;
  error: string;
  loading: boolean;
};

const defaultContext = {
  videos: defaultYTResponse,
  foundedMovies: defaultYTResponse,
  searchVideo: (title: string, search_query: string) => ({}),
  getMoreVideos: (
    title: string,
    pageToken: string,
    videosType: YTResponseTypes
  ) => ({}),
  specificVideo: defaultVideoResponse,
  getSpecificVideo: (videoId: string) => ({}),
  channel: defaultAuthorResponse,
  getChanelDetails: (channelId: string) => ({}),
  comments: defaultCommentsResponse,
  getVideoComments: (videoId: string) => ({}),
  lastSearchQuery: "",
  commentsError: "",
  error: "",
  loading: false,
};

const VideoContext = createContext<VideoContextType>(defaultContext);

export const useVideo = () => {
  return useContext(VideoContext);
};

type VideoProviderType = {
  children: React.ReactNode;
};

export default function VideoProvider({ children }: VideoProviderType) {
  const [videos, setVideos] = useState<YTResponseTypes | any>(
    defaultYTResponse
  );
  const [foundedMovies, setFoundedMovies] = useState<YTResponseTypes | any>(
    defaultYTResponse
  );

  const [specificVideo, setSpecificVideo] = useState<SpecificVideo | any>(
    defaultVideoResponse
  );

  const [channel, setChannel] = useState<AuthorResponse | any>(
    defaultAuthorResponse
  );

  const [comments, setComments] = useState<VideoCommentsResponse | any>(
    defaultCommentsResponse
  );
  const [commentsError, setCommentsError] = useState("");

  const [lastSearchQuery, setLastSearchQuery] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      setLoading(true);
      try {
        if (process.env.REACT_APP_GET_FROM_API) {
          const { data } = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&type=video&key=${process.env.REACT_APP_YT_KEY}`
          );

          setVideos(data);
          setLoading(false);
        } else {
          setTimeout(() => {
            setVideos(defRes);
            setLoading(false);
          }, 2000);
        }
      } catch {
        setError("can't get youtube videos");
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  const searchVideo = async (title: string, search_query: string) => {
    setLastSearchQuery(search_query);
    setLoading(true);
    try {
      if (process.env.REACT_APP_GET_FROM_API) {
        const { data } = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=searchSortUnspecified&q=${title}&key=${process.env.REACT_APP_YT_KEY}`
        );

        setFoundedMovies(data);
        setLoading(false);
      } else {
        setTimeout(() => {
          setFoundedMovies(defSearchRes);
          setLoading(false);
        }, 2000);
      }
    } catch {
      setError("can't found a videos");
      setLoading(false);
    }
  };

  const getMoreVideos = async (
    title: string,
    pageToken: string,
    videosType: YTResponseTypes
  ) => {
    try {
      const query = title ? `&q=${title}` : "";
      const token = pageToken ? `&pageToken=${pageToken}` : "";
      const type = !title ? "&type=video" : "";
      const mockedData = videosType === videos ? defRes : defSearchRes;
      const setState = videosType === videos ? setVideos : setFoundedMovies;

      if (process.env.REACT_APP_GET_FROM_API) {
        const { data } = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet${token}&order=searchSortUnspecified${
            query + type
          }&key=${process.env.REACT_APP_YT_KEY}`
        );

        setTimeout(() => {
          const items = [...videosType.items, ...data.items];
          const newItems = { ...data, items: items };
          setState(newItems);
        }, 1000);
      } else {
        setTimeout(() => {
          const items = [...videosType.items, ...mockedData.items];
          const data = { ...mockedData, items: items };

          setState(data);
        }, 2000);
      }
    } catch {
      setError("can't get more videos");
    }
  };

  const getSpecificVideo = async (videoId: string) => {
    try {
      if (process.env.REACT_APP_GET_FROM_API) {
        const { data } = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&id=${videoId}&key=${process.env.REACT_APP_YT_KEY}`
        );

        setSpecificVideo(data);
      } else {
        setSpecificVideo(defResVideo);
      }
    } catch (error) {
      console.log(error);
      setError("can't get a video");
    }
  };

  const getChanelDetails = async (channelId: string) => {
    try {
      if (process.env.REACT_APP_GET_FROM_API) {
        const { data } = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=${channelId}&key=${process.env.REACT_APP_YT_KEY}`
        );

        setChannel(data);
      } else {
        setChannel(defResChannel);
      }
    } catch (error) {
      console.log(error);
      setError("Can't get chanel");
    }
  };

  const getVideoComments = async (videoId: string) => {
    try {
      if (process.env.REACT_APP_GET_FROM_API) {
        const { data } = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=10&videoId=${videoId}&key=${process.env.REACT_APP_YT_KEY}`
        );
        setComments(data);
      } else {
        setComments(defResComments);
      }
    } catch (error) {
      setCommentsError("Komentarze nie są dostępne");
    }
  };

  const values = {
    videos,
    foundedMovies,
    searchVideo,
    getMoreVideos,
    specificVideo,
    getSpecificVideo,
    channel,
    getChanelDetails,
    lastSearchQuery,
    comments,
    getVideoComments,
    commentsError,
    error,
    loading,
  };

  return (
    <VideoContext.Provider value={values}>{children}</VideoContext.Provider>
  );
}
