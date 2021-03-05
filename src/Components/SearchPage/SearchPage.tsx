import React from "react";
import { useVideo } from "../../Context/VideoContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import VideoSearchPreview from "../VideoSearchPreview/VideoSearchPreview";
import ChanelSearchPreview from "../ChanelSearchPreview/ChanelSearchPreview";
export default function SearchPage() {
  const { loading, error, foundedMovies } = useVideo();

  return (
    <section className="px-4 w-full max-w-screen-lg mx-auto">
      {loading ? (
        <label className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Loader
            type="Oval"
            color="#cc181e"
            height={50}
            width={50}
            timeout={3000}
          ></Loader>
          <div className="p-2" />
          Loading
        </label>
      ) : (
        !error && (
          <>
            {foundedMovies.items.map((item) =>
              item.id.kind === "youtube#video" ? (
                <VideoSearchPreview video={item} key={item.etag} />
              ) : (
                <ChanelSearchPreview chanel={item} key={item.etag} />
              )
            )}
          </>
        )
      )}
    </section>
  );
}
