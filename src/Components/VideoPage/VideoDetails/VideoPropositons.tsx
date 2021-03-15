import { useVideo } from "../../../Context/VideoContext";
import VideoSearchPreview from "../../VideoSearchPreview/VideoSearchPreview";

export default function VideoPropositons() {
  const { videos } = useVideo();

  return (
    <div>
      {videos.items.map((item) => (
        <VideoSearchPreview
          video={item}
          key={item.id.videoId}
          isVideoPage={true}
        />
      ))}
    </div>
  );
}
