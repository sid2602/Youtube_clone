import React, { useEffect } from "react";
import { useVideo } from "../../Context/VideoContext";
import { useParams } from "react-router-dom";
import ChannelInfo from "./ChannelInfo";
import VideoSearchPreview from "../VideoSearchPreview/VideoSearchPreview";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
export default function ChannelPage() {
  const {
    getChanelDetails,
    searchVideo,
    foundedMovies,
    getMoreVideos,
  } = useVideo();
  const { search_query } = useParams<{ search_query: string }>();

  useEffect(() => {
    getChanelDetails(search_query);
    searchVideo("", search_query, true);
  }, []);

  return (
    <section>
      <ChannelInfo />
      <section className="p-4 w-3/4 mx-auto">
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
          {foundedMovies.items.map((item) => (
            <VideoSearchPreview
              video={item}
              isVideoPage={true}
              isChannelPage={true}
              key={item.snippet.title + "channel"}
            />
          ))}
        </InfiniteScroll>
      </section>
    </section>
  );
}
