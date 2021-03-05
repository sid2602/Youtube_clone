import { useContext, createContext, useState, useEffect } from "react";
import YTResponseTypes, { defaultYTResponse } from "../Types/YoutubeResponse";
import axios from "axios";
import defRes from "./defRes.json";
import defSearchRes from "./defSearchRes.json";
import { resolve } from "node:path";
type VideoContextType = {
  videos: YTResponseTypes;
  foundedMovies: YTResponseTypes;
  searchVideo: (title: string) => {};
  error: string;
  loading: boolean;
};

const defaultContext = {
  videos: defaultYTResponse,
  foundedMovies: defaultYTResponse,
  searchVideo: (title: string) => ({}),
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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      setLoading(true);
      try {
        // const { data } = await axios.get(
        //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&key=${process.env.REACT_APP_YT_KEY}`
        // );

        // // setVideos(data);
        // console.log(data);
        // console.log(defRes);
        //To don't use credencial only test
        setTimeout(() => {
          setVideos(defRes);
          setLoading(false);
        }, 2000);
      } catch {
        setError("can't get youtube videos");
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  const searchVideo = async (title: string) => {
    setLoading(true);
    try {
      // const { data } = await axios.get(
      //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${title}&key=${process.env.REACT_APP_YT_KEY}`
      // );

      // setFoundedMovies(data);

      setTimeout(() => {
        setFoundedMovies(defSearchRes);
        setLoading(false);
      }, 2000);
    } catch {
      setError("can't found a videos");
      setLoading(false);
    }
  };

  const values = {
    videos,
    foundedMovies,
    searchVideo,
    error,
    loading,
  };

  return (
    <VideoContext.Provider value={values}>{children}</VideoContext.Provider>
  );
}
