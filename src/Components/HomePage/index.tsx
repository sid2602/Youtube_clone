import { useVideo } from "../../Context/VideoContext";
import VideoPlaceholders from "../VideoPlaceholder/VideoPlaceholder";
import VideoPreview from "../VideoPreview/VideoPreview";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import withHandleErrorAndLoading from "../HOC/withHandleErrorAndLoading";
const HomePage = () => {
  const { videos, getMoreVideos } = useVideo();

  return (
    <section className="flex flex-wrap justify-center sm:justify-around">
      <InfiniteScroll
        className="flex flex-wrap justify-center sm:justify-around"
        dataLength={videos.items.length}
        next={() => getMoreVideos("", videos.nextPageToken, videos)}
        hasMore={videos.items.length > 0 && videos.nextPageToken ? true : false}
        loader={
          <div className="w-96 min-w-full m-auto flex justify-center">
            <Loader />
          </div>
        }
      >
        {videos.items.map((item) => (
          <VideoPreview video={item} key={item.id.videoId} />
        ))}
      </InfiniteScroll>
      )
    </section>
  );
};

export default withHandleErrorAndLoading(HomePage, VideoPlaceholders);
