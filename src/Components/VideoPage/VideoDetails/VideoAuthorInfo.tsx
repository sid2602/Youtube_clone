import { Link } from "react-router-dom";

import { useVideo } from "../../../Context/VideoContext";

export default function VideoAuthorInfo() {
  const { channel } = useVideo();
  const [item] = channel.items;

  return (
    <div className="flex border-b-2">
      {channel.items.length > 0 && (
        <Link
          to="/channel"
          className="flex items-center hover:bg-gray-200 transition p-2 "
        >
          <div className="rounded-full w-10 h-10 lg:w-12 lg:h-12 overflow-hidden">
            <img src={item.snippet.thumbnails.default.url} alt="chanel logo" />
          </div>
          <div className="ml-4">
            <h4 className="text-base lg:text-lg">{item.snippet.title}</h4>
            <span className="text-gray-500 text-sm lg:text-base">
              {!item.statistics.hiddenSubscriberCount &&
                `${item.statistics.subscriberCount} subskrycji`}
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}
