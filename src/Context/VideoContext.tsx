import { useContext, createContext, useState, useEffect } from "react";
import YTResponseTypes, { defaultYTResponse } from "../Types/YoutubeResponse";
import axios from "axios";
import defRes from "./defRes.json";
type VideoContextType = {
  videos: YTResponseTypes;
  error: string;
  loading: boolean;
};

const defaultContext = {
  videos: defaultYTResponse,
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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
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
        setError("some error");
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  const values = {
    videos,
    error,
    loading,
  };

  return (
    <VideoContext.Provider value={values}>{children}</VideoContext.Provider>
  );
}
