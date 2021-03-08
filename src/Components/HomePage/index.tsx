import { useVideo } from "../../Context/VideoContext";
import VideoPlaceholder from "../VideoPlaceholder/VideoPlaceholder";
import VideoPreview from "../VideoPreview/VideoPreview";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";

export default function HomePage() {
  const { videos, loading, error, getMoreVideos } = useVideo();
  const placeholders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <section className="flex flex-wrap justify-center sm:justify-around">
      {loading && !error ? (
        placeholders.map((item) => <VideoPlaceholder key={item} />)
      ) : (
        <InfiniteScroll
          className="flex flex-wrap justify-center sm:justify-around"
          dataLength={videos.items.length}
          next={() => getMoreVideos("", videos.nextPageToken, videos)}
          hasMore={true}
          loader={
            <div className="w-96 m-auto flex justify-center">
              <Loader />
            </div>
          }
        >
          {videos.items.map((item) => (
            <VideoPreview video={item} key={item.id.videoId} />
          ))}
        </InfiniteScroll>
      )}
    </section>
  );
}
