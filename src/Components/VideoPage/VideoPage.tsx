import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import withHandleErrorAndLoading from "../HOC/withHandleErrorAndLoading";
import { MainLoader } from "../Loader";
import Video from "./Video";
const VideoPage = () => {
  const { search_query } = useParams<{ search_query: string }>();
  const { getSpecificVideo } = useVideo();

  useEffect(() => {
    getSpecificVideo(search_query);
  }, []);

  return (
    <section>
      <Video />
    </section>
  );
};

export default withHandleErrorAndLoading(VideoPage, MainLoader);
