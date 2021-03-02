import React from "react";

import { useVideo } from "../../Context/VideoContext";
import VideoPlaceholder from "../VideoPlaceholder/VideoPlaceholder";
export default function HomePage() {
  const { videos, loading, error } = useVideo();
  console.log(videos, loading, error);

  return (
    <section className="flex flex-wrap justify-center sm:justify-around">
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
      <VideoPlaceholder />
    </section>
  );
}
