import { useEffect } from "react";
import { useVideo } from "../../Context/VideoContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "../Loader";
import VideoSearchPreview from "../VideoSearchPreview/VideoSearchPreview";
import ChanelSearchPreview from "../ChanelSearchPreview/ChanelSearchPreview";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

export default function SearchPage() {
  const {
    loading,
    error,
    foundedMovies,
    searchVideo,
    getMoreVideos,
  } = useVideo();

  const { search_query } = useParams<{ search_query: string }>();
  useEffect(() => {
    if (search_query) {
      searchVideo(search_query);
    }
  }, [searchVideo, search_query]);

  return (
    <section className="px-4 w-full max-w-screen-lg mx-auto">
      {loading ? (
        <label className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Loader />
          <div className="p-2" />
          Loading
        </label>
      ) : (
        !error && (
          <InfiniteScroll
            dataLength={foundedMovies.items.length}
            next={() =>
              getMoreVideos(
                search_query,
                foundedMovies.nextPageToken,
                foundedMovies
              )
            }
            hasMore={true}
            loader={
              <div className="flex justify-center">
                <Loader />
              </div>
            }
          >
            {foundedMovies.items.map((item) =>
              item.id.kind === "youtube#channel" ? (
                <ChanelSearchPreview chanel={item} key={item.etag} />
              ) : (
                <VideoSearchPreview video={item} key={item.etag} />
              )
            )}
          </InfiniteScroll>
        )
      )}
    </section>
  );
}
