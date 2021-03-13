import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import withHandleErrorAndLoading from "../HOC/withHandleErrorAndLoading";
import { MainLoader } from "../Loader";
import Video from "./Video";
import VideoDetails from "./VideoDetails/VideoDetails";
import VideoAuthorInfo from "./VideoDetails/VideoAuthorInfo";
import VideoDescription from "./VideoDetails/VideoDescription";
import VideoDetailsProvider from "../../Context/VideoDetailsContext";
import VideoComments from "./VideoDetails/VideoComments";
const VideoPage = () => {
  const { search_query } = useParams<{ search_query: string }>();
  const {
    getSpecificVideo,
    specificVideo,
    getChanelDetails,
    comments,
    getVideoComments,
  } = useVideo();

  useEffect(() => {
    getSpecificVideo(search_query);
  }, [search_query]);

  useEffect(() => {
    const [VideoItems] = specificVideo.items;
    if (VideoItems) {
      getChanelDetails(VideoItems.snippet.channelId);
      getVideoComments(VideoItems.id);
    }
  }, [search_query, specificVideo]);

  return (
    <section>
      <article className="w-full lg:w-2/3 sm:p-10">
        <Video />
        <VideoDetailsProvider>
          <VideoDetails />
          <VideoAuthorInfo />
          <VideoDescription />
          <VideoComments />
        </VideoDetailsProvider>
      </article>
    </section>
  );
};

export default withHandleErrorAndLoading(VideoPage, MainLoader);
