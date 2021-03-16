import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import withHandleErrorAndLoading from "../HOC/withHandleErrorAndLoading";
import { MainLoader } from "../Loader";
import Video from "./Video";
import VideoDetails from "./VideoDetails/VideoDetails";
import AuthorInfo from "../AuthorInfo";
import VideoDescription from "./VideoDetails/VideoDescription";
import VideoDetailsProvider from "../../Context/VideoDetailsContext";
import VideoComments from "./VideoDetails/VideoComments";
import VideoPropositions from "./VideoDetails/VideoPropositons";

const VideoPage = () => {
  const { search_query } = useParams<{ search_query: string }>();
  const {
    getSpecificVideo,
    specificVideo,
    getChanelDetails,
    getVideoComments,
    videos,
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
    <section className="flex flex-col lg:flex-row sm:p-10">
      <section className="w-full  ">
        <Video />
        <VideoDetailsProvider>
          <VideoDetails />
          <AuthorInfo channelPage={false} />
          <VideoDescription />
          <VideoComments />
        </VideoDetailsProvider>
      </section>
      <section className="max-w-screen-sm px-4">
        <VideoPropositions />
      </section>
    </section>
  );
};

export default withHandleErrorAndLoading(VideoPage, MainLoader);
