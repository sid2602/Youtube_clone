import React from "react";

import { useVideo } from "../../Context/VideoContext";
import VideoPlaceholder from "../VideoPlaceholder/VideoPlaceholder";
import VideoPreview from "../VideoPreview/VideoPreview";
export default function HomePage() {
  const { videos, loading, error } = useVideo();
  const placeholders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <section className="flex flex-wrap justify-center sm:justify-around">
      {loading
        ? placeholders.map((item) => <VideoPlaceholder key={item} />)
        : videos.items.map((item) => (
            <VideoPreview video={item} key={item.id.videoId} />
          ))}
    </section>
  );
}
