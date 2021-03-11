import { useEffect } from "react";
import { useVideo } from "../../Context/VideoContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader, { MainLoader } from "../Loader";
import VideoSearchPreview from "../VideoSearchPreview/VideoSearchPreview";
import ChanelSearchPreview from "../ChanelSearchPreview/ChanelSearchPreview";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import withHandleErrorAndLoading from "../HOC/withHandleErrorAndLoading";
const SearchPage = () => {
  const { foundedMovies, searchVideo, getMoreVideos } = useVideo();

  const { search_query } = useParams<{ search_query: string }>();
  useEffect(() => {
    if (search_query && foundedMovies.items.length === 0) {
      searchVideo(search_query);
    }
  }, [search_query]);

  return (
    <section className="px-4 w-full max-w-screen-lg mx-auto">
      {foundedMovies.items.length > 0 && (
        <InfiniteScroll
          dataLength={foundedMovies.items.length}
          next={() =>
            getMoreVideos(
              search_query,
              foundedMovies.nextPageToken,
              foundedMovies
            )
          }
          hasMore={
            foundedMovies.items.length > 0 && foundedMovies.nextPageToken
              ? true
              : false
          }
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
      )}
      )
    </section>
  );
};

export default withHandleErrorAndLoading(SearchPage, MainLoader);
