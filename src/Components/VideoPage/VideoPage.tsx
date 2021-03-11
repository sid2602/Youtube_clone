import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import withHandleErrorAndLoading from "../HOC/withHandleErrorAndLoading";
import { MainLoader } from "../Loader";
import Video from "./Video";
import VideoDetails from "./VideoDetails/VideoDetails";
import VideoAuthorInfo from "./VideoAuthorInfo";
const VideoPage = () => {
  const { search_query } = useParams<{ search_query: string }>();
  const { getSpecificVideo } = useVideo();

  useEffect(() => {
    getSpecificVideo(search_query);
  }, [search_query]);

  return (
    <section>
      <article className="w-full lg:w-2/3 sm:p-10">
        <Video />
        <VideoDetails />
        <VideoAuthorInfo />
      </article>
    </section>
  );
};

export default withHandleErrorAndLoading(VideoPage, MainLoader);
