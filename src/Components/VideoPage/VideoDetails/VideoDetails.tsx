import { useVideo } from "../../../Context/VideoContext";

import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import VideoAction from "./VideoAction";
import VideoTitle from "./VideoTitle";
export default function VideoDetails() {
  const { specificVideo } = useVideo();

  const [item] = specificVideo.items;

  return (
    <>
      {specificVideo.items.length > 0 && (
        <div className="border-b-2 p-2">
          <VideoTitle item={item} />
          <div className="flex justify-between mt-2">
            <div className="text-gray-500 text-sm lg:text-base">
              {item.statistics.viewCount} wyświetleń
            </div>
            <div className="flex pr-4 ">
              <VideoAction
                count={item.statistics.likeCount}
                icon={faThumbsUp}
              />
              <VideoAction
                count={item.statistics.dislikeCount}
                icon={faThumbsDown}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
